// src/data/upgrades.js

export const UPGRADES = [
  // =========================
  // COINS
  // =========================

  {
    id: "drill",
    name: "Broca de Mineração",
    description: "Aumenta a produção de Coins.",
    icon: "/icons/drill.png",

    currency: "coins",
    type: "coin",

    color: "#FFC107",

    baseCost: 100,
    costMultiplier: 1.8,

    baseBonus: 60,
    bonusMultiplier: 1.25,
  },

  {
    id: "drone",
    name: "Drone Coletor",
    description: "Drone automático de mineração.",

    icon: "/icons/drone.png",

    currency: "coins",
    type: "coin",

    color: "#4CAF50",

    baseCost: 500,
    costMultiplier: 1.8,

    baseBonus: 180,
    bonusMultiplier: 1.25,
  },

  {
    id: "factory",
    name: "Fábrica Automatizada",
    description: "Produz Coins automaticamente.",

    icon: "/icons/factory.png",

    currency: "coins",
    type: "coin",

    color: "#2196F3",

    baseCost: 2500,
    costMultiplier: 1.8,

    baseBonus: 600,
    bonusMultiplier: 1.25,
  },

  {
    id: "turbo",
    name: "Motor Turbo",
    description: "Aumenta muito a produção de Coins.",

    icon: "/icons/turbo.png",

    currency: "coins",
    type: "coin",

    color: "#F44336",

    baseCost: 10000,
    costMultiplier: 1.8,

    baseBonus: 1800,
    bonusMultiplier: 1.25,
  },

  // =========================
  // CRISTAIS
  // =========================

  {
    id: "extractor",
    name: "Extrator de Cristais",
    description: "Produz Cristais continuamente.",

    icon: "/icons/extractor.png",

    currency: "crystals",
    type: "crystal",

    color: "#00BCD4",

    baseCost: 10,
    costMultiplier: 1.8,

    baseBonus: 0.2,
    bonusMultiplier: 1.25,
  },

  {
    id: "asteroid",
    name: "Coletor de Asteroides",
    description: "Coleta Cristais dos asteroides.",

    icon: "/icons/asteroid.png",

    currency: "crystals",
    type: "crystal",

    color: "#9C27B0",

    baseCost: 25,
    costMultiplier: 1.8,

    baseBonus: 0.5,
    bonusMultiplier: 1.25,
  },

  {
    id: "core",
    name: "Núcleo Quântico",
    description: "Multiplica a produção de Cristais.",

    icon: "/icons/core.png",

    currency: "crystals",
    type: "crystal",

    color: "#E91E63",

    baseCost: 50,
    costMultiplier: 1.8,

    baseBonus: 1,
    bonusMultiplier: 1.25,
  },
];

// ===========================================
// Funções
// ===========================================

export function getUpgradeCost(upgrade, level) {
  return Math.floor(
    upgrade.baseCost *
    Math.pow(upgrade.costMultiplier, level)
  );
}

export function getUpgradeBonus(upgrade, level) {
  return Number(
    (
      upgrade.baseBonus *
      Math.pow(upgrade.bonusMultiplier, level)
    ).toFixed(2)
  );
}

export function getUpgradeById(id) {
  return UPGRADES.find((upgrade) => upgrade.id === id);
}