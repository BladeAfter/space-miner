export const createProductionSlice = (set, get) => ({

  //==============================
  // PRODUÇÃO POR SEGUNDO
  //==============================

  coinRate: 1,
  crystalRate: 0,
  energyRate: 0,

  //==============================
  // CAPACIDADE
  //==============================

  capacity: 3000,

  //==============================
  // PRODUÇÃO ONLINE
  //==============================

  produce(delta = 1) {
    set((state) => ({
      coins: state.coins + state.coinRate * delta,
      crystals: state.crystals + state.crystalRate * delta,
      energy: state.energy + state.energyRate * delta,
    }));
  },

  //==============================
  // ALTERAR PRODUÇÃO
  //==============================

  setCoinRate(value) {
    set({
      coinRate: value,
    });
  },

  setCrystalRate(value) {
    set({
      crystalRate: value,
    });
  },

  setEnergyRate(value) {
    set({
      energyRate: value,
    });
  },

});