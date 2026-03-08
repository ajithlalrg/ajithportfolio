"use client";

import { create } from "zustand";
import {
  type BuildingConfig,
  type IslandConfig,
  achievements,
  missions,
  islands,
} from "@/lib/portfolio-data";

export interface GameState {
  // Loading
  isLoading: boolean;
  loadProgress: number;
  setLoading: (loading: boolean) => void;
  setLoadProgress: (progress: number) => void;

  // Player
  currentIsland: string;
  playerPosition: [number, number, number];
  setCurrentIsland: (island: string) => void;
  setPlayerPosition: (pos: [number, number, number]) => void;

  // Camera
  cameraAngle: number;
  cameraPitch: number;
  setCameraAngle: (angle: number) => void;
  setCameraPitch: (pitch: number) => void;

  // Interaction
  nearbyBuilding: (BuildingConfig & { islandId: string }) | null;
  activePanel: (BuildingConfig & { islandId: string }) | null;
  setNearbyBuilding: (
    building: (BuildingConfig & { islandId: string }) | null
  ) => void;
  openPanel: (building: BuildingConfig & { islandId: string }) => void;
  closePanel: () => void;

  // Progress
  visitedIslands: Set<string>;
  visitedBuildings: Set<string>;
  unlockedAchievements: string[];
  activeMissionIndex: number;
  completedMissions: string[];
  visitIsland: (islandId: string) => void;
  visitBuilding: (buildingId: string) => void;
  unlockAchievement: (achievementId: string) => void;
  completeMission: (missionId: string) => void;
  advanceMission: () => void;

  // UI
  showMap: boolean;
  showMissions: boolean;
  showWelcome: boolean;
  showControls: boolean;
  achievementPopup: string | null;
  toggleMap: () => void;
  toggleMissions: () => void;
  dismissWelcome: () => void;
  toggleControls: () => void;
  showAchievementPopup: (name: string) => void;
  dismissAchievementPopup: () => void;

  // Portal
  teleportTarget: string | null;
  setTeleportTarget: (target: string | null) => void;
}

export const useGameStore = create<GameState>((set, get) => ({
  // Loading
  isLoading: true,
  loadProgress: 0,
  setLoading: (isLoading) => set({ isLoading }),
  setLoadProgress: (loadProgress) => set({ loadProgress }),

  // Player
  currentIsland: "hub",
  playerPosition: [0, 1, 5],
  setCurrentIsland: (currentIsland) => set({ currentIsland }),
  setPlayerPosition: (playerPosition) => set({ playerPosition }),

  // Camera
  cameraAngle: 0,
  cameraPitch: 0.5,
  setCameraAngle: (cameraAngle) => set({ cameraAngle }),
  setCameraPitch: (cameraPitch) => set({ cameraPitch }),

  // Interaction
  nearbyBuilding: null,
  activePanel: null,
  setNearbyBuilding: (nearbyBuilding) => set({ nearbyBuilding }),
  openPanel: (building) => {
    set({ activePanel: building });
    // Track visited building
    get().visitBuilding(building.id);
  },
  closePanel: () => set({ activePanel: null }),

  // Progress
  visitedIslands: new Set(["hub"]),
  visitedBuildings: new Set(),
  unlockedAchievements: [],
  activeMissionIndex: 0,
  completedMissions: [],

  visitIsland: (islandId) => {
    const state = get();
    if (state.visitedIslands.has(islandId)) return;

    const newVisited = new Set(state.visitedIslands);
    newVisited.add(islandId);
    set({ visitedIslands: newVisited, currentIsland: islandId });

    // Check achievements
    const islandAchievement = achievements.find(
      (a) => a.triggerIsland === islandId && !a.triggerCount
    );
    if (
      islandAchievement &&
      !state.unlockedAchievements.includes(islandAchievement.id)
    ) {
      get().unlockAchievement(islandAchievement.id);
    }

    // Check world explorer
    if (newVisited.size >= islands.length) {
      const worldExplorer = achievements.find((a) => a.id === "world-explorer");
      if (
        worldExplorer &&
        !state.unlockedAchievements.includes(worldExplorer.id)
      ) {
        setTimeout(() => get().unlockAchievement(worldExplorer.id), 2000);
      }
    }

    // Check mission completion
    const activeMission = missions[state.activeMissionIndex];
    if (activeMission && activeMission.targetIsland === islandId) {
      get().completeMission(activeMission.id);
    }
  },

  visitBuilding: (buildingId) => {
    const state = get();
    if (state.visitedBuildings.has(buildingId)) return;

    const newVisited = new Set(state.visitedBuildings);
    newVisited.add(buildingId);
    set({ visitedBuildings: newVisited });

    // Check first contact achievement
    if (newVisited.size === 1) {
      const firstContact = achievements.find((a) => a.id === "first-contact");
      if (
        firstContact &&
        !state.unlockedAchievements.includes(firstContact.id)
      ) {
        get().unlockAchievement(firstContact.id);
      }
    }
  },

  unlockAchievement: (achievementId) => {
    const state = get();
    if (state.unlockedAchievements.includes(achievementId)) return;

    const achievement = achievements.find((a) => a.id === achievementId);
    if (!achievement) return;

    set({
      unlockedAchievements: [...state.unlockedAchievements, achievementId],
    });
    get().showAchievementPopup(achievement.name);
  },

  completeMission: (missionId) => {
    const state = get();
    if (state.completedMissions.includes(missionId)) return;
    set({ completedMissions: [...state.completedMissions, missionId] });
    setTimeout(() => get().advanceMission(), 1500);
  },

  advanceMission: () => {
    const state = get();
    if (state.activeMissionIndex < missions.length - 1) {
      set({ activeMissionIndex: state.activeMissionIndex + 1 });
    }
  },

  // UI
  showMap: false,
  showMissions: false,
  showWelcome: true,
  showControls: true,
  achievementPopup: null,
  toggleMap: () => set((s) => ({ showMap: !s.showMap })),
  toggleMissions: () => set((s) => ({ showMissions: !s.showMissions })),
  dismissWelcome: () => set({ showWelcome: false }),
  toggleControls: () => set((s) => ({ showControls: !s.showControls })),
  showAchievementPopup: (name) => {
    set({ achievementPopup: name });
    setTimeout(() => set({ achievementPopup: null }), 4000);
  },
  dismissAchievementPopup: () => set({ achievementPopup: null }),

  // Portal
  teleportTarget: null,
  setTeleportTarget: (teleportTarget) => set({ teleportTarget }),
}));
