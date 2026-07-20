export const createTaskSlice = (set, get) => ({

  taskCooldowns: {},

  startTaskCooldown(id, seconds) {
    set((state) => ({
      taskCooldowns: {
        ...state.taskCooldowns,
        [id]: Date.now() + seconds * 1000,
      },
    }));
  },

  isTaskReady(id) {
    const end = get().taskCooldowns[id];

    if (!end) return true;

    return Date.now() >= end;
  },

  getTaskTimeLeft(id) {
    const end = get().taskCooldowns[id];

    if (!end) return 0;

    return Math.max(0, Math.ceil((end - Date.now()) / 1000));
  },

});