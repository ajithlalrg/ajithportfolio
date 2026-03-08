"use client";

import { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import GameUI from "./GameUI";
import { useGameStore } from "./store";

export default function DevCityGame() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    const state = useGameStore.getState();
    if (state.activePanel || state.showWelcome || state.showMap) return;
    const canvas = containerRef.current?.querySelector("canvas");
    if (canvas) canvas.requestPointerLock();
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const state = useGameStore.getState();
      if (e.code === "Escape") {
        if (state.activePanel) state.closePanel();
        else if (state.showMap) state.toggleMap();
        else document.exitPointerLock();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        background: "#020617",
        overflow: "hidden",
      }}
    >
      <div
        onClick={handleClick}
        style={{ width: "100%", height: "100%", cursor: "crosshair" }}
      >
        <Canvas
          style={{ width: "100%", height: "100%" }}
          camera={{ fov: 60, near: 0.1, far: 500, position: [0, 12, 20] }}
          shadows
          gl={{
            antialias: true,
            alpha: false,
            powerPreference: "high-performance",
          }}
          dpr={[1, 1.5]}
        >
          <Scene />
        </Canvas>
      </div>
      <GameUI />
    </div>
  );
}
