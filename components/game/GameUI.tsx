"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useGameStore } from "./store";
import {
  missions,
  achievements,
  islands,
  personalInfo,
  type BuildingConfig,
  type Project,
  type Experience,
  type SkillCategory,
  type Certification,
  type InfoContent,
} from "@/lib/portfolio-data";
import { useEffect } from "react";
import Link from "next/link";

// ============================================================
// Loading Screen
// ============================================================
function LoadingScreen() {
  const isLoading = useGameStore((s) => s.isLoading);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ background: "linear-gradient(135deg, #020617, #0f172a)" }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <h1
              className="text-6xl font-bold mb-1 tracking-tight"
              style={{
                color: "#00f0ff",
                textShadow: "0 0 40px rgba(0,240,255,0.3)",
              }}
            >
              DEV CITY
            </h1>
            <p className="text-slate-500 text-sm tracking-[0.3em] uppercase mb-10">
              Interactive Portfolio Experience
            </p>
            <div className="w-72 h-[3px] bg-slate-800 rounded-full overflow-hidden mx-auto">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                className="h-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #00f0ff, #8b5cf6, #ec4899)",
                }}
              />
            </div>
            <p className="text-slate-600 mt-4 text-xs">
              Initializing world...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ============================================================
// Welcome Overlay
// ============================================================
function WelcomeOverlay() {
  const showWelcome = useGameStore((s) => s.showWelcome);
  const isLoading = useGameStore((s) => s.isLoading);
  const dismissWelcome = useGameStore((s) => s.dismissWelcome);

  if (isLoading) return null;

  return (
    <AnimatePresence>
      {showWelcome && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.75)" }}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="max-w-lg w-full rounded-2xl p-8 backdrop-blur-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(15,23,42,0.97), rgba(30,41,59,0.97))",
              border: "1px solid rgba(0,240,255,0.2)",
              boxShadow: "0 0 60px rgba(0,240,255,0.08)",
            }}
          >
            <div
              className="text-xs tracking-[0.3em] uppercase mb-3"
              style={{ color: "#00f0ff" }}
            >
              Welcome Explorer
            </div>
            <h2 className="text-3xl font-bold text-white mb-1">Dev City</h2>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              Explore {personalInfo.name}&apos;s professional journey as a
              floating archipelago. Each island represents a different dimension
              of a {personalInfo.stats.experience}-year engineering career.
            </p>

            <div className="space-y-2.5 mb-7">
              {[
                ["WASD / Arrows", "Move around the island"],
                ["Mouse", "Look around (click to enable)"],
                ["E", "Interact with buildings"],
                ["TAB", "Toggle world map"],
                ["ESC", "Close panels"],
              ].map(([key, desc]) => (
                <div key={key} className="flex items-center gap-3">
                  <kbd
                    className="px-2.5 py-1 rounded text-xs font-mono min-w-[80px] text-center"
                    style={{
                      background: "rgba(0,240,255,0.08)",
                      border: "1px solid rgba(0,240,255,0.2)",
                      color: "#00f0ff",
                    }}
                  >
                    {key}
                  </kbd>
                  <span className="text-slate-400 text-sm">{desc}</span>
                </div>
              ))}
            </div>

            <button
              onClick={dismissWelcome}
              className="w-full py-3 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer"
              style={{
                background: "rgba(0,240,255,0.12)",
                border: "1px solid rgba(0,240,255,0.3)",
                color: "#00f0ff",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(0,240,255,0.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(0,240,255,0.12)")
              }
            >
              Start Exploring
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ============================================================
// HUD
// ============================================================
function HUD() {
  const isLoading = useGameStore((s) => s.isLoading);
  const showWelcome = useGameStore((s) => s.showWelcome);
  const activePanel = useGameStore((s) => s.activePanel);
  const currentIsland = useGameStore((s) => s.currentIsland);
  const activeMissionIndex = useGameStore((s) => s.activeMissionIndex);
  const completedMissions = useGameStore((s) => s.completedMissions);
  const visitedIslands = useGameStore((s) => s.visitedIslands);
  const visitedBuildings = useGameStore((s) => s.visitedBuildings);
  const unlockedAchievements = useGameStore((s) => s.unlockedAchievements);

  if (isLoading || showWelcome || activePanel) return null;

  const island = islands.find((i) => i.id === currentIsland);
  const mission = missions[activeMissionIndex];
  const isMissionComplete = mission
    ? completedMissions.includes(mission.id)
    : false;

  return (
    <div className="fixed inset-0 z-20 pointer-events-none">
      {/* Back to portfolio */}
      <div className="absolute top-4 left-4 pointer-events-auto">
        <Link
          href="/"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md text-xs text-slate-400 hover:text-white transition-colors"
          style={{
            background: "rgba(15,23,42,0.7)",
            border: "1px solid rgba(148,163,184,0.15)",
          }}
        >
          <span>&larr;</span> Portfolio
        </Link>
      </div>

      {/* Top bar: Current location */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="px-6 py-2 rounded-full backdrop-blur-md text-center"
          style={{
            background: "rgba(15,23,42,0.7)",
            border: `1px solid ${island?.color || "#fff"}33`,
          }}
        >
          <div
            className="text-xs font-medium tracking-wider"
            style={{ color: island?.color }}
          >
            {island?.name}
          </div>
          <div className="text-[10px] text-slate-500">{island?.subtitle}</div>
        </motion.div>
      </div>

      {/* Top-right: Stats */}
      <div className="absolute top-4 right-4 text-right space-y-1">
        <div
          className="text-xs px-3 py-1 rounded-full backdrop-blur-md"
          style={{
            background: "rgba(15,23,42,0.7)",
            color: "#94a3b8",
            border: "1px solid rgba(148,163,184,0.15)",
          }}
        >
          Islands: {visitedIslands.size}/{islands.length}
        </div>
        <div
          className="text-xs px-3 py-1 rounded-full backdrop-blur-md"
          style={{
            background: "rgba(15,23,42,0.7)",
            color: "#94a3b8",
            border: "1px solid rgba(148,163,184,0.15)",
          }}
        >
          Buildings: {visitedBuildings.size}
        </div>
        <div
          className="text-xs px-3 py-1 rounded-full backdrop-blur-md"
          style={{
            background: "rgba(15,23,42,0.7)",
            color: "#f59e0b",
            border: "1px solid rgba(245,158,11,0.2)",
          }}
        >
          Achievements: {unlockedAchievements.length}/{achievements.length}
        </div>
      </div>

      {/* Bottom-left: Mission tracker */}
      {mission && (
        <div className="absolute bottom-4 left-4 max-w-xs">
          <motion.div
            key={mission.id}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="rounded-xl p-4 backdrop-blur-md"
            style={{
              background: "rgba(15,23,42,0.8)",
              border: "1px solid rgba(0,240,255,0.15)",
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  background: isMissionComplete ? "#10b981" : "#00f0ff",
                  boxShadow: `0 0 8px ${isMissionComplete ? "#10b981" : "#00f0ff"}`,
                }}
              />
              <span
                className="text-[10px] uppercase tracking-wider"
                style={{ color: "#00f0ff" }}
              >
                {isMissionComplete ? "Completed" : "Current Mission"}
              </span>
            </div>
            <div className="text-sm font-medium text-white mb-0.5">
              {mission.title}
            </div>
            <div className="text-xs text-slate-400">{mission.description}</div>
          </motion.div>
        </div>
      )}

      {/* Bottom-right: Controls hint */}
      <div className="absolute bottom-4 right-4">
        <div
          className="text-[10px] text-slate-600 text-right space-y-0.5 px-3 py-2 rounded-lg backdrop-blur-md"
          style={{
            background: "rgba(15,23,42,0.5)",
          }}
        >
          <div>WASD - Move</div>
          <div>Mouse - Look</div>
          <div>E - Interact</div>
          <div>TAB - Map</div>
          <div>Click to enable camera</div>
        </div>
      </div>

      {/* Bottom center: NPC dialogue */}
      {mission && !isMissionComplete && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 max-w-md w-full px-4">
          <NPCDialogue dialogue={mission.npcDialogue} missionId={mission.id} />
        </div>
      )}
    </div>
  );
}

// ============================================================
// NPC Dialogue Bubble
// ============================================================
function NPCDialogue({
  dialogue,
  missionId,
}: {
  dialogue: string;
  missionId: string;
}) {
  const completedMissions = useGameStore((s) => s.completedMissions);
  const showWelcome = useGameStore((s) => s.showWelcome);

  // Only show for uncompleted missions, and hide during welcome
  if (completedMissions.includes(missionId) || showWelcome) return null;

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 10, opacity: 0 }}
      transition={{ delay: 1 }}
      className="rounded-xl p-4 backdrop-blur-md text-center"
      style={{
        background: "rgba(15,23,42,0.85)",
        border: "1px solid rgba(0,240,255,0.2)",
      }}
    >
      <div
        className="text-[10px] uppercase tracking-wider mb-1"
        style={{ color: "#00f0ff" }}
      >
        ARIA - Your Guide
      </div>
      <p className="text-xs text-slate-300 leading-relaxed">{dialogue}</p>
    </motion.div>
  );
}

// ============================================================
// Interaction Panel
// ============================================================
function InteractionPanel() {
  const activePanel = useGameStore((s) => s.activePanel);
  const closePanel = useGameStore((s) => s.closePanel);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.code === "Escape" && activePanel) {
        closePanel();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activePanel, closePanel]);

  return (
    <AnimatePresence>
      {activePanel && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.7)" }}
          onClick={closePanel}
        >
          <motion.div
            initial={{ scale: 0.92, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.92, y: 20 }}
            className="max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-2xl p-6 backdrop-blur-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))",
              border: "1px solid rgba(148,163,184,0.15)",
              boxShadow: "0 0 80px rgba(0,0,0,0.5)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <PanelContent config={activePanel} />
            <button
              onClick={closePanel}
              className="mt-6 w-full py-2.5 rounded-xl text-sm transition-colors cursor-pointer"
              style={{
                background: "rgba(148,163,184,0.1)",
                border: "1px solid rgba(148,163,184,0.2)",
                color: "#94a3b8",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(148,163,184,0.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(148,163,184,0.1)")
              }
            >
              Close [ESC]
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ============================================================
// Panel Content Router
// ============================================================
function PanelContent({
  config,
}: {
  config: BuildingConfig & { islandId: string };
}) {
  const island = islands.find((i) => i.id === config.islandId);
  const accentColor = island?.color || "#00f0ff";

  switch (config.type) {
    case "project":
      return (
        <ProjectPanel project={config.content as Project} color={accentColor} />
      );
    case "experience":
      return (
        <ExperiencePanel
          experience={config.content as Experience}
          color={accentColor}
        />
      );
    case "skill":
      return (
        <SkillPanel skill={config.content as SkillCategory} color={accentColor} />
      );
    case "certification":
      return (
        <CertPanel cert={config.content as Certification} color={accentColor} />
      );
    case "info":
    default:
      return (
        <InfoPanel info={config.content as InfoContent} color={accentColor} />
      );
  }
}

// ============================================================
// Content Panels
// ============================================================

function ProjectPanel({
  project,
  color,
}: {
  project: Project;
  color: string;
}) {
  return (
    <div>
      <div
        className="text-xs uppercase tracking-wider mb-2"
        style={{ color }}
      >
        Project Tower
      </div>
      <h3 className="text-2xl font-bold text-white mb-1">{project.name}</h3>
      <div className="flex items-center gap-3 mb-4">
        <span
          className="text-sm px-2.5 py-0.5 rounded-full"
          style={{ background: `${color}15`, color }}
        >
          {project.client}
        </span>
        <span className="text-xs text-slate-500">{project.role}</span>
      </div>

      <div className="mb-4">
        <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
          Challenge
        </div>
        <p className="text-sm text-slate-300">{project.problem}</p>
      </div>

      <div className="mb-4">
        <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">
          Key Contributions
        </div>
        <ul className="space-y-1.5">
          {project.contributions.map((c, i) => (
            <li key={i} className="flex items-start gap-2">
              <span style={{ color }} className="text-xs mt-1">
                &#9656;
              </span>
              <span className="text-sm text-slate-300">{c}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">
          Tech Stack
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-md"
              style={{
                background: `${color}12`,
                color,
                border: `1px solid ${color}25`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Scale indicator */}
      <div className="mt-4 pt-4" style={{ borderTop: `1px solid ${color}15` }}>
        <div className="text-xs text-slate-500 mb-1">Project Scale</div>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <div
              key={s}
              className="w-8 h-1.5 rounded-full"
              style={{
                background: s <= project.scale ? color : "rgba(148,163,184,0.15)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ExperiencePanel({
  experience,
  color,
}: {
  experience: Experience;
  color: string;
}) {
  return (
    <div>
      <div
        className="text-xs uppercase tracking-wider mb-2"
        style={{ color }}
      >
        Leadership Center
      </div>
      <h3 className="text-2xl font-bold text-white mb-1">
        {experience.company}
      </h3>
      <p className="text-sm text-slate-500 mb-5">{experience.location}</p>

      <div className="mb-5">
        <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">
          Roles & Timeline
        </div>
        <div className="space-y-2">
          {experience.roles.map((role, i) => (
            <div
              key={i}
              className="flex items-center gap-3 py-2 px-3 rounded-lg"
              style={{ background: `${color}08` }}
            >
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{
                  background: color,
                  boxShadow: `0 0 6px ${color}`,
                }}
              />
              <div>
                <div className="text-sm text-white font-medium">
                  {role.title}
                </div>
                <div className="text-xs text-slate-500">{role.period}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">
          Key Highlights
        </div>
        <ul className="space-y-1.5">
          {experience.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2">
              <span style={{ color }} className="text-xs mt-1">
                &#9656;
              </span>
              <span className="text-sm text-slate-300">{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SkillPanel({
  skill,
  color,
}: {
  skill: SkillCategory;
  color: string;
}) {
  return (
    <div>
      <div
        className="text-xs uppercase tracking-wider mb-2"
        style={{ color }}
      >
        Tech District
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{skill.name}</h3>

      <div className="grid grid-cols-2 gap-2">
        {skill.skills.map((s) => (
          <div
            key={s}
            className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm"
            style={{
              background: `${color}08`,
              border: `1px solid ${color}15`,
            }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: color }}
            />
            <span className="text-slate-300">{s}</span>
          </div>
        ))}
      </div>

      <div
        className="mt-4 pt-4 text-xs text-slate-500"
        style={{ borderTop: `1px solid ${color}12` }}
      >
        {skill.skills.length} technologies in this domain
      </div>
    </div>
  );
}

function CertPanel({
  cert,
  color,
}: {
  cert: Certification;
  color: string;
}) {
  return (
    <div className="text-center py-4">
      <div className="text-4xl mb-4">&#127942;</div>
      <div
        className="text-xs uppercase tracking-wider mb-2"
        style={{ color }}
      >
        Certification
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
      <p className="text-slate-400 text-sm">Achieved in {cert.year}</p>
    </div>
  );
}

function InfoPanel({
  info,
  color,
}: {
  info: InfoContent;
  color: string;
}) {
  return (
    <div>
      <div
        className="text-xs uppercase tracking-wider mb-2"
        style={{ color }}
      >
        Information Terminal
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{info.title}</h3>
      <p className="text-sm text-slate-400 mb-5">{info.description}</p>

      <div className="space-y-2">
        {info.details.map((detail, i) => (
          <div
            key={i}
            className="flex items-start gap-2 py-2 px-3 rounded-lg"
            style={{ background: `${color}08` }}
          >
            <span style={{ color }} className="text-xs mt-0.5">
              &#9656;
            </span>
            <span className="text-sm text-slate-300">{detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// Achievement Popup
// ============================================================
function AchievementPopup() {
  const popup = useGameStore((s) => s.achievementPopup);

  return (
    <AnimatePresence>
      {popup && (
        <motion.div
          initial={{ y: -60, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -60, opacity: 0, scale: 0.9 }}
          className="fixed top-20 left-1/2 -translate-x-1/2 z-50"
        >
          <div
            className="flex items-center gap-3 px-5 py-3 rounded-xl backdrop-blur-md"
            style={{
              background:
                "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(15,23,42,0.9))",
              border: "1px solid rgba(245,158,11,0.3)",
              boxShadow: "0 0 40px rgba(245,158,11,0.1)",
            }}
          >
            <span className="text-2xl">&#127942;</span>
            <div>
              <div className="text-[10px] text-amber-400 uppercase tracking-wider">
                Achievement Unlocked
              </div>
              <div className="text-sm font-medium text-white">{popup}</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ============================================================
// Map Overlay
// ============================================================
function MapOverlay() {
  const showMap = useGameStore((s) => s.showMap);
  const toggleMap = useGameStore((s) => s.toggleMap);
  const currentIsland = useGameStore((s) => s.currentIsland);
  const visitedIslands = useGameStore((s) => s.visitedIslands);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === "Tab") {
        e.preventDefault();
        toggleMap();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [toggleMap]);

  return (
    <AnimatePresence>
      {showMap && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 flex items-center justify-center p-8"
          style={{ background: "rgba(0,0,0,0.8)" }}
          onClick={toggleMap}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="max-w-3xl w-full rounded-2xl p-8 backdrop-blur-2xl"
            style={{
              background: "rgba(15,23,42,0.95)",
              border: "1px solid rgba(148,163,184,0.15)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-white">World Map</h3>
                <p className="text-xs text-slate-500">
                  Dev City Archipelago - TAB to close
                </p>
              </div>
              <div className="text-xs text-slate-500">
                {visitedIslands.size}/{islands.length} Islands Discovered
              </div>
            </div>

            {/* Visual map */}
            <div className="relative w-full aspect-square max-h-[50vh]">
              <svg viewBox="-120 -120 240 240" className="w-full h-full">
                {/* Connection lines */}
                {islands
                  .filter((i) => i.id !== "hub")
                  .map((island) => (
                    <line
                      key={`line-${island.id}`}
                      x1={islands[0].position[0] * 1.3}
                      y1={islands[0].position[2] * 1.3}
                      x2={island.position[0] * 1.3}
                      y2={island.position[2] * 1.3}
                      stroke={island.color}
                      strokeWidth="0.5"
                      opacity="0.2"
                    />
                  ))}

                {/* Islands */}
                {islands.map((island) => {
                  const x = island.position[0] * 1.3;
                  const y = island.position[2] * 1.3;
                  const visited = visitedIslands.has(island.id);
                  const isCurrent = island.id === currentIsland;

                  return (
                    <g key={island.id}>
                      {/* Glow for current */}
                      {isCurrent && (
                        <circle
                          cx={x}
                          cy={y}
                          r={12}
                          fill={island.color}
                          opacity={0.1}
                        >
                          <animate
                            attributeName="r"
                            values="10;14;10"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      )}

                      <circle
                        cx={x}
                        cy={y}
                        r={8}
                        fill={visited ? `${island.color}20` : "#1e293b"}
                        stroke={island.color}
                        strokeWidth={isCurrent ? 1.5 : 0.5}
                        opacity={visited ? 1 : 0.4}
                      />

                      {/* Island name */}
                      <text
                        x={x}
                        y={y + 14}
                        textAnchor="middle"
                        fill={visited ? island.color : "#475569"}
                        fontSize="5"
                        fontFamily="sans-serif"
                      >
                        {island.name}
                      </text>

                      {/* Status dot */}
                      {isCurrent && (
                        <circle
                          cx={x}
                          cy={y}
                          r={2}
                          fill="#00f0ff"
                        >
                          <animate
                            attributeName="opacity"
                            values="1;0.3;1"
                            dur="1s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Island list */}
            <div className="grid grid-cols-3 gap-2 mt-4">
              {islands.map((island) => {
                const visited = visitedIslands.has(island.id);
                return (
                  <div
                    key={island.id}
                    className="flex items-center gap-2 py-1.5 px-2.5 rounded-lg text-xs"
                    style={{
                      background: visited
                        ? `${island.color}10`
                        : "rgba(30,41,59,0.5)",
                      border: `1px solid ${visited ? `${island.color}25` : "rgba(30,41,59,0.5)"}`,
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{
                        background: visited ? island.color : "#334155",
                      }}
                    />
                    <span
                      style={{
                        color: visited ? island.color : "#475569",
                      }}
                    >
                      {island.name}
                    </span>
                    {currentIsland === island.id && (
                      <span className="text-[8px] text-cyan-400 ml-auto">
                        HERE
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ============================================================
// Main UI Export
// ============================================================
export default function GameUI() {
  return (
    <>
      <LoadingScreen />
      <WelcomeOverlay />
      <HUD />
      <InteractionPanel />
      <AchievementPopup />
      <MapOverlay />
    </>
  );
}
