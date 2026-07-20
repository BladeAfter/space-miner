export const createResourceSlice = (set) => ({

  //==============================
  // RECURSOS
  //==============================

  coins: 0,
  crystals: 0,
  energy: 100,

  //==============================
  // ADICIONAR
  //==============================

  addCoins: (amount) =>
    set((state) => ({
      coins: state.coins + amount,
    })),

  addCrystals: (amount) =>
    set((state) => ({
      crystals: state.crystals + amount,
    })),

  addEnergy: (amount) =>
    set((state) => ({
      energy: state.energy + amount,
    })),

  //==============================
  // REMOVER
  //==============================

  removeCoins: (amount) =>
    set((state) => ({
      coins: Math.max(0, state.coins - amount),
    })),

  removeCrystals: (amount) =>
    set((state) => ({
      crystals: Math.max(0, state.crystals - amount),
    })),

  removeEnergy: (amount) =>
    set((state) => ({
      energy: Math.max(0, state.energy - amount),
    })),

});