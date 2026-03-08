"use client";

import { useRef, useEffect, useMemo, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Text, Stars, Line } from "@react-three/drei";
import * as THREE from "three";
import { useGameStore } from "./store";
import { islands, type IslandConfig, type BuildingConfig } from "@/lib/portfolio-data";

// ============================================================
// Keyboard Input Hook
// ============================================================
function useKeyboard() {
  const keys = useRef({ forward: false, backward: false, left: false, right: false, interact: false });

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.repeat) return;
      switch (e.code) {
        case "KeyW": case "ArrowUp":    keys.current.forward  = true; break;
        case "KeyS": case "ArrowDown":  keys.current.backward = true; break;
        case "KeyA": case "ArrowLeft":  keys.current.left     = true; break;
        case "KeyD": case "ArrowRight": keys.current.right    = true; break;
        case "KeyE":                    keys.current.interact = true; break;
      }
    };
    const up = (e: KeyboardEvent) => {
      switch (e.code) {
        case "KeyW": case "ArrowUp":    keys.current.forward  = false; break;
        case "KeyS": case "ArrowDown":  keys.current.backward = false; break;
        case "KeyA": case "ArrowLeft":  keys.current.left     = false; break;
        case "KeyD": case "ArrowRight": keys.current.right    = false; break;
        case "KeyE":                    keys.current.interact = false; break;
      }
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => { window.removeEventListener("keydown", down); window.removeEventListener("keyup", up); };
  }, []);

  return keys;
}

// ============================================================
// Building (proximity glow + interaction)
// ============================================================
function Building({ config, islandPosition, islandId, islandColor, isActive }: {
  config: BuildingConfig;
  islandPosition: [number, number, number];
  islandId: string;
  islandColor: string;
  isActive: boolean;
}) {
  const matRef = useRef<THREE.MeshStandardMaterial>(null);
  const wireMat = useRef<THREE.MeshBasicMaterial>(null);
  const isNear = useRef(false);
  const glowVal = useRef(0.15);

  const worldPos = useMemo<[number, number, number]>(
    () => [
      islandPosition[0] + config.position[0],
      islandPosition[1] + config.height / 2 + 0.6,
      islandPosition[2] + config.position[2],
    ],
    [islandPosition, config]
  );

  const geometry = useMemo(() => {
    switch (config.shape) {
      case "hexagon":  return new THREE.CylinderGeometry(1.2, 1.2, config.height, 6);
      case "cylinder": return new THREE.CylinderGeometry(1.0, 1.0, config.height, 24);
      case "pyramid":  return new THREE.ConeGeometry(1.2, config.height, 4);
      default:         return new THREE.BoxGeometry(1.8, config.height, 1.8);
    }
  }, [config.shape, config.height]);

  useFrame((_, delta) => {
    if (!isActive) return;

    const pp = useGameStore.getState().playerPosition;
    const dist = Math.sqrt((pp[0] - worldPos[0]) ** 2 + (pp[2] - worldPos[2]) ** 2);
    const wasNear = isNear.current;
    isNear.current = dist < 4;

    // Update store only on edge transitions
    if (isNear.current && !wasNear) {
      useGameStore.getState().setNearbyBuilding({ ...config, islandId });
    } else if (!isNear.current && wasNear) {
      const cur = useGameStore.getState().nearbyBuilding;
      if (cur?.id === config.id) useGameStore.getState().setNearbyBuilding(null);
    }

    // Animate materials directly — no setState
    const target = isNear.current ? 0.6 : 0.15;
    glowVal.current += (target - glowVal.current) * Math.min(delta * 4, 1);

    if (matRef.current) {
      matRef.current.emissiveIntensity = glowVal.current;
      matRef.current.color.set(isNear.current ? "#ffffff" : islandColor);
    }
    if (wireMat.current) {
      wireMat.current.opacity = isNear.current ? 0.6 : 0.15;
    }
  });

  const activePanel = useGameStore((s) => s.activePanel);

  return (
    <group position={worldPos}>
      {/* Main solid mesh */}
      <mesh castShadow geometry={geometry}>
        <meshStandardMaterial
          ref={matRef}
          color={islandColor}
          emissive={islandColor}
          emissiveIntensity={0.15}
          metalness={0.4}
          roughness={0.3}
          transparent
          opacity={0.88}
        />
      </mesh>

      {/* Wireframe overlay */}
      <mesh geometry={geometry}>
        <meshBasicMaterial
          ref={wireMat}
          color={islandColor}
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Floating name label */}
      <Text
        position={[0, config.height / 2 + 0.7, 0]}
        fontSize={0.42}
        color={islandColor}
        anchorX="center"
        anchorY="bottom"
        outlineWidth={0.04}
        outlineColor="#000000"
        maxWidth={8}
      >
        {config.name}
      </Text>

      {/* Interaction prompt — only show when near & no panel open */}
      <InteractPrompt
        height={config.height}
        buildingId={config.id}
        islandId={islandId}
        islandColor={islandColor}
        isActive={isActive && !activePanel}
        worldPos={worldPos}
      />

      {/* Base ring */}
      <mesh position={[0, -config.height / 2 + 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.4, 1.7, config.shape === "hexagon" ? 6 : 32]} />
        <meshBasicMaterial color={islandColor} transparent opacity={0.15} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

// Small component to show [E] interact — avoids per-frame setState in Building
function InteractPrompt({ height, buildingId, islandId, islandColor, isActive, worldPos }: {
  height: number; buildingId: string; islandId: string; islandColor: string;
  isActive: boolean; worldPos: [number, number, number];
}) {
  const [show, setShow] = useState(false);

  useFrame(() => {
    if (!isActive) { if (show) setShow(false); return; }
    const pp = useGameStore.getState().playerPosition;
    const dist = Math.sqrt((pp[0] - worldPos[0]) ** 2 + (pp[2] - worldPos[2]) ** 2);
    const near = dist < 4;
    if (near !== show) setShow(near);
  });

  if (!show) return null;
  return (
    <Text
      position={[0, height / 2 + 1.5, 0]}
      fontSize={0.32}
      color="#ffffff"
      anchorX="center"
      anchorY="bottom"
      outlineWidth={0.03}
      outlineColor="#000000"
    >
      {"[E] Interact"}
    </Text>
  );
}

// ============================================================
// Portal
// ============================================================
function Portal({ position, targetIsland, color, label, isActive }: {
  position: [number, number, number];
  targetIsland: string;
  color: string;
  label: string;
  isActive: boolean;
}) {
  const outerRing = useRef<THREE.Mesh>(null);
  const innerDisc = useRef<THREE.Mesh>(null);
  const [isNear, setIsNear] = useState(false);
  const nearRef = useRef(false);

  useFrame((state, delta) => {
    if (outerRing.current) outerRing.current.rotation.z += delta * 0.5;
    if (innerDisc.current) {
      innerDisc.current.rotation.z -= delta * 0.3;
      const s = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      innerDisc.current.scale.setScalar(s);
    }

    if (!isActive) return;
    const pp = useGameStore.getState().playerPosition;
    const dist = Math.sqrt((pp[0] - position[0]) ** 2 + (pp[2] - position[2]) ** 2);

    if (dist < 2.5 && !nearRef.current) { nearRef.current = true; setIsNear(true); }
    if (dist >= 2.5 && nearRef.current)  { nearRef.current = false; setIsNear(false); }
    if (dist < 1.5) useGameStore.getState().setTeleportTarget(targetIsland);
  });

  return (
    <group position={position}>
      {/* Outer rotating ring */}
      <mesh ref={outerRing}>
        <torusGeometry args={[2, 0.12, 8, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} metalness={0.5} roughness={0.2} />
      </mesh>

      {/* Inner portal disc */}
      <mesh ref={innerDisc}>
        <circleGeometry args={[1.8, 32]} />
        <meshBasicMaterial color={color} transparent opacity={isNear ? 0.4 : 0.1} side={THREE.DoubleSide} />
      </mesh>

      {/* Destination label */}
      <Text position={[0, 3, 0]} fontSize={0.48} color={color} anchorX="center" outlineWidth={0.04} outlineColor="#000">
        {`\u2192 ${label}`}
      </Text>

      {isNear && (
        <Text position={[0, -2.8, 0]} fontSize={0.28} color="#ffffff" anchorX="center" outlineWidth={0.02} outlineColor="#000">
          Walk closer to teleport
        </Text>
      )}

      <pointLight color={color} intensity={isNear ? 3 : 1} distance={8} />
    </group>
  );
}

// ============================================================
// Island Platform (floating animation)
// ============================================================
function IslandPlatform({ config, isActive }: { config: IslandConfig; isActive: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const baseY = config.position[1];

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y =
        baseY + Math.sin(state.clock.elapsedTime * 0.3 + config.position[0] * 0.05) * 0.35;
    }
  });

  const maxH = Math.max(...config.buildings.map((b) => b.height), 3);

  return (
    <group ref={groupRef} position={[config.position[0], baseY, config.position[2]]}>
      {/* Hexagonal platform body */}
      <mesh position={[0, -0.5, 0]} receiveShadow>
        <cylinderGeometry args={[config.radius, config.radius * 0.7, 2, 6]} />
        <meshStandardMaterial color="#0f172a" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Top surface */}
      <mesh position={[0, 0.51, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[config.radius, 6]} />
        <meshStandardMaterial color="#1e293b" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* Edge glow ring */}
      <mesh position={[0, 0.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[config.radius - 0.3, config.radius + 0.1, 6]} />
        <meshBasicMaterial color={config.color} transparent opacity={isActive ? 0.5 : 0.15} side={THREE.DoubleSide} />
      </mesh>

      {/* Ambient island light */}
      <pointLight position={[0, 5, 0]} color={config.color} intensity={isActive ? 1.5 : 0.3} distance={config.radius * 2} />
      <pointLight position={[0, -2, 0]} color={config.color} intensity={0.4} distance={config.radius} />

      {/* Island title */}
      <Text position={[0, maxH + 4, 0]} fontSize={1.4} color={config.color} anchorX="center" outlineWidth={0.06} outlineColor="#000">
        {config.name}
      </Text>
      <Text position={[0, maxH + 2.8, 0]} fontSize={0.52} color="#94a3b8" anchorX="center" outlineWidth={0.03} outlineColor="#000">
        {config.subtitle}
      </Text>
    </group>
  );
}

// ============================================================
// Player (movement + camera follow)
// ============================================================
function Player() {
  const bodyRef = useRef<THREE.Group>(null);
  const keys = useKeyboard();
  const { camera } = useThree();
  const camAngle = useRef(0);
  const camPitch = useRef(0.6);
  const lastInteract = useRef(false);
  const bobPhase = useRef(0);
  const initialized = useRef(false);

  const currentIsland = useGameStore((s) => s.currentIsland);
  const activePanel   = useGameStore((s) => s.activePanel);
  const showWelcome   = useGameStore((s) => s.showWelcome);
  const teleportTarget = useGameStore((s) => s.teleportTarget);

  const islandConfig = useMemo(
    () => islands.find((i) => i.id === currentIsland)!,
    [currentIsland]
  );

  // Mouse look
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (document.pointerLockElement && !activePanel && !showWelcome) {
        camAngle.current -= e.movementX * 0.003;
        camPitch.current = Math.max(0.2, Math.min(1.3, camPitch.current - e.movementY * 0.003));
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [activePanel, showWelcome]);

  // Teleportation
  useEffect(() => {
    if (!teleportTarget) return;
    const dest = islands.find((i) => i.id === teleportTarget);
    if (!dest || !bodyRef.current) return;
    bodyRef.current.position.set(dest.position[0], dest.position[1] + 1.2, dest.position[2] + 5);
    useGameStore.getState().setCurrentIsland(teleportTarget);
    useGameStore.getState().visitIsland(teleportTarget);
    useGameStore.getState().setTeleportTarget(null);
  }, [teleportTarget]);

  useFrame((_, delta) => {
    if (!bodyRef.current) return;

    // Initialise position once
    if (!initialized.current) {
      bodyRef.current.position.set(islandConfig.position[0], islandConfig.position[1] + 1.2, islandConfig.position[2] + 5);
      initialized.current = true;
    }

    // Movement (blocked when panel open or welcome shown)
    if (!activePanel && !showWelcome) {
      const speed = 12;
      const dir = new THREE.Vector3();
      if (keys.current.forward)  dir.z -= 1;
      if (keys.current.backward) dir.z += 1;
      if (keys.current.left)     dir.x -= 1;
      if (keys.current.right)    dir.x += 1;

      const moving = dir.length() > 0;
      if (moving) {
        dir.normalize().applyAxisAngle(new THREE.Vector3(0, 1, 0), camAngle.current).multiplyScalar(speed * delta);
        bodyRef.current.position.add(dir);
        bodyRef.current.rotation.y = Math.atan2(dir.x, dir.z);
        bobPhase.current += delta * 12;
      }

      // Clamp to island boundary
      const centre = new THREE.Vector3(...islandConfig.position);
      const rel = bodyRef.current.position.clone().sub(centre);
      rel.y = 0;
      const maxR = islandConfig.radius - 1.5;
      if (rel.length() > maxR) {
        rel.normalize().multiplyScalar(maxR);
        bodyRef.current.position.x = centre.x + rel.x;
        bodyRef.current.position.z = centre.z + rel.z;
      }

      bodyRef.current.position.y = islandConfig.position[1] + 1.2 + (moving ? Math.sin(bobPhase.current) * 0.07 : 0);

      // Sync store
      useGameStore.getState().setPlayerPosition([bodyRef.current.position.x, bodyRef.current.position.y, bodyRef.current.position.z]);

      // Interact
      if (keys.current.interact && !lastInteract.current) {
        const nearby = useGameStore.getState().nearbyBuilding;
        if (nearby) { useGameStore.getState().openPanel(nearby); document.exitPointerLock(); }
      }
      lastInteract.current = keys.current.interact;
    }

    // Camera always follows (even on welcome screen, so player sees the world)
    const camDist = 14;
    const camH = camPitch.current * 14;
    const offset = new THREE.Vector3(Math.sin(camAngle.current) * camDist, camH, Math.cos(camAngle.current) * camDist);
    const target = bodyRef.current.position.clone().add(offset);
    camera.position.lerp(target, activePanel ? 2 * delta : 5 * delta);
    const look = bodyRef.current.position.clone();
    look.y += 1;
    camera.lookAt(look);
  });

  return (
    <group ref={bodyRef}>
      {/* Body */}
      <mesh castShadow>
        <capsuleGeometry args={[0.3, 0.7, 8, 16]} />
        <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.35} metalness={0.5} roughness={0.3} />
      </mesh>
      {/* Head */}
      <mesh position={[0, 0.78, 0]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.45} metalness={0.4} roughness={0.3} />
      </mesh>
      {/* Visor */}
      <mesh position={[0, 0.8, 0.22]}>
        <boxGeometry args={[0.28, 0.07, 0.06]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      {/* Player glow */}
      <pointLight color="#00f0ff" intensity={1} distance={5} position={[0, 0, 0]} />
    </group>
  );
}

// ============================================================
// Data Stream — energy arcs between hub and islands
// ============================================================
function DataStream({ start, end, color }: {
  start: [number, number, number];
  end: [number, number, number];
  color: string;
}) {
  const lineRef = useRef<{ material: THREE.LineBasicMaterial } | null>(null);

  const points = useMemo(() => {
    const mid = new THREE.Vector3(
      (start[0] + end[0]) / 2,
      Math.max(start[1], end[1]) + 20,
      (start[2] + end[2]) / 2
    );
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(...start), mid, new THREE.Vector3(...end)
    );
    return curve.getPoints(40);
  }, [start, end]);

  useFrame((state) => {
    if (lineRef.current?.material) {
      lineRef.current.material.opacity = 0.15 + Math.sin(state.clock.elapsedTime * 1.5) * 0.08;
    }
  });

  return (
    <Line
      ref={lineRef as never}
      points={points}
      color={color}
      lineWidth={0.5}
      transparent
      opacity={0.2}
    />
  );
}

// ============================================================
// Floating Particles
// ============================================================
function FloatingParticles() {
  const COUNT = 180;
  const ref = useRef<THREE.Points>(null);

  const [positions] = useState(() => {
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 280;
      arr[i * 3 + 1] = Math.random() * 30 - 5;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 280;
    }
    return arr;
  });

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.008;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#00f0ff" size={0.12} transparent opacity={0.35} sizeAttenuation />
    </points>
  );
}

// ============================================================
// Portal layout helpers
// ============================================================
function getPortalsForIsland(island: IslandConfig) {
  if (island.id === "hub") {
    return islands.filter((i) => i.id !== "hub").map((target, idx, arr) => {
      const angle = (idx / arr.length) * Math.PI * 2;
      const r = island.radius - 3;
      return {
        key: `hub->${target.id}`,
        position: [island.position[0] + Math.cos(angle) * r, island.position[1] + 2, island.position[2] + Math.sin(angle) * r] as [number, number, number],
        targetIsland: target.id,
        color: target.color,
        label: target.name,
      };
    });
  }
  const dir = new THREE.Vector3(-island.position[0], 0, -island.position[2]).normalize();
  return [{
    key: `${island.id}->hub`,
    position: [island.position[0] + dir.x * (island.radius - 3), island.position[1] + 2, island.position[2] + dir.z * (island.radius - 3)] as [number, number, number],
    targetIsland: "hub",
    color: "#e2e8f0",
    label: "Central Hub",
  }];
}

// ============================================================
// Main Scene
// ============================================================
export default function Scene() {
  const currentIsland = useGameStore((s) => s.currentIsland);
  const setLoading    = useGameStore((s) => s.setLoading);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, [setLoading]);

  return (
    <>
      {/* Explicit scene background — critical for R3F v9 */}
      <color attach="background" args={["#020617"]} />

      {/* Lighting */}
      <ambientLight intensity={0.14} color="#4a9eff" />
      <directionalLight position={[50, 60, 30]} intensity={0.4} color="#e2e8f0" castShadow shadow-mapSize={[1024, 1024]} />
      <hemisphereLight args={["#1e1b4b", "#0f172a", 0.3]} />

      {/* Depth fog */}
      <fog attach="fog" args={["#020617", 60, 240]} />

      {/* Stars */}
      <Stars radius={250} depth={80} count={3500} factor={4} saturation={0.4} fade speed={0.4} />

      {/* Particles */}
      <FloatingParticles />

      {/* Islands */}
      {islands.map((island) => (
        <group key={island.id}>
          <IslandPlatform config={island} isActive={island.id === currentIsland} />

          {island.buildings.map((building) => (
            <Building
              key={building.id}
              config={building}
              islandPosition={island.position}
              islandId={island.id}
              islandColor={island.color}
              isActive={island.id === currentIsland}
            />
          ))}
        </group>
      ))}

      {/* Portals */}
      {islands.map((island) =>
        getPortalsForIsland(island).map((p) => (
          <Portal
            key={p.key}
            position={p.position}
            targetIsland={p.targetIsland}
            color={p.color}
            label={p.label}
            isActive={currentIsland === island.id}
          />
        ))
      )}

      {/* Energy beams hub ↔ islands */}
      {islands.filter((i) => i.id !== "hub").map((island) => (
        <DataStream
          key={`beam-${island.id}`}
          start={islands[0].position}
          end={island.position}
          color={island.color}
        />
      ))}

      {/* Player */}
      <Player />
    </>
  );
}
