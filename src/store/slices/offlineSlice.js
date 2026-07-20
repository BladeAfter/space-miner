const MAX_OFFLINE = 3 * 60 * 60 * 1000; // 3 horas

export const createOfflineSlice = (set, get) => {

  return {

    //==============================
    // OFFLINE
    //==============================

    lastLogin: Date.now(),

    offlineCoins: 0,
    offlineCrystals: 0,
    offlineEnergy: 0,

    offlineTime: 0,

    //==============================
    // CALCULAR RECOMPENSA OFFLINE
    //==============================

    applyOffline() {

      const now = Date.now();

      const diff = Math.min(
        now - get().lastLogin,
        MAX_OFFLINE
      );

      const seconds = Math.floor(diff / 1000);

      set((state) => ({

        offlineCoins: state.coinRate * seconds,
        offlineCrystals: state.crystalRate * seconds,
        offlineEnergy: state.energyRate * seconds,

        offlineTime: seconds,

        lastLogin: now,

      }));

    },

    //==============================
    // RESGATAR RECOMPENSA
    //==============================

    claimOfflineReward() {

      set((state) => ({

        coins: state.coins + Math.floor(state.offlineCoins),
        crystals: state.crystals + Math.floor(state.offlineCrystals),
        energy: state.energy + Math.floor(state.offlineEnergy),

        offlineCoins: 0,
        offlineCrystals: 0,
        offlineEnergy: 0,

        offlineTime: 0,

      }));

    },

  };

};