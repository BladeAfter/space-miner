import {
  UPGRADES,
  getUpgradeBonus,
  getUpgradeCost,
} from "../../data/upgrades";

// Cria um objeto indexado pelo id
const upgradesData = Object.fromEntries(
  UPGRADES.map((upgrade) => [upgrade.id, upgrade])
);

// Estado inicial
const createUpgrades = () => {
  const upgrades = {};

  UPGRADES.forEach((upgrade) => {
    upgrades[upgrade.id] = {
      level: 1,
    };
  });

  return upgrades;
};

export const createUpgradeSlice = (set) => ({

  // =========================
  // UPGRADES
  // =========================

  upgrades: createUpgrades(),

  // =========================
  // COMPRAR UPGRADE
  // =========================

  buyUpgrade(id) {
    set((state) => {

      const info = upgradesData[id];

      if (!info) return state;

      const current = state.upgrades[id];

      const cost = getUpgradeCost(info, current.level - 1);

      // Verifica moeda usada
      if (info.currency === "coins") {
        if (state.coins < cost) return state;
      }

      if (info.currency === "crystals") {
        if (state.crystals < cost) return state;
      }

      const bonus = getUpgradeBonus(info, current.level - 1);

      let coinRate = state.coinRate;
      let crystalRate = state.crystalRate;

      if (info.type === "coin") {
        coinRate += bonus;
      }

      if (info.type === "crystal") {
        crystalRate += bonus;
      }

      return {

        coins:
          info.currency === "coins"
            ? state.coins - cost
            : state.coins,

        crystals:
          info.currency === "crystals"
            ? state.crystals - cost
            : state.crystals,

        coinRate,
        crystalRate,

        upgrades: {
          ...state.upgrades,
          [id]: {
            level: current.level + 1,
          },
        },

      };
    });
  },

});