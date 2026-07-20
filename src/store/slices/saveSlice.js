export const createSaveSlice = (set, get) => ({

  //========================================
  // DADOS PARA SALVAR
  //========================================

  getSaveData() {
    return {

      // Recursos
      coins: get().coins,
      crystals: get().crystals,
      energy: get().energy,

      // Produção
      coinRate: get().coinRate,
      crystalRate: get().crystalRate,
      energyRate: get().energyRate,
      capacity: get().capacity,

      // Offline
      offlineCoins: get().offlineCoins,
      offlineCrystals: get().offlineCrystals,
      offlineEnergy: get().offlineEnergy,
      offlineTime: get().offlineTime,
      lastLogin: Date.now(),

      // Upgrades
      upgrades: get().upgrades,

      // Tasks
      taskCooldowns: get().taskCooldowns,

    };
  },

  //========================================
  // CARREGAR SAVE
  //========================================

  loadGame(save) {

    if (!save) return;

    set((state) => ({

      ...state,

      ...save,

      // Mantém os upgrades
      upgrades: {
        ...state.upgrades,
        ...(save.upgrades || {}),
      },

      // Mantém os cooldowns das Tasks
      taskCooldowns: {
        ...state.taskCooldowns,
        ...(save.taskCooldowns || {}),
      },

    }));

  },

});