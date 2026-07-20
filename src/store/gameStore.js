import { create } from "zustand";

import { createResourceSlice } from "./slices/resourceSlice";
import { createProductionSlice } from "./slices/productionSlice";
import { createOfflineSlice } from "./slices/offlineSlice";
import { createUpgradeSlice } from "./slices/upgradeSlice";
import { createSaveSlice } from "./slices/saveSlice";
import { createTaskSlice } from "./slices/taskSlice";

export const useGameStore = create((set, get) => ({

  ...createResourceSlice(set, get),

  ...createProductionSlice(set, get),

  ...createOfflineSlice(set, get),

  ...createUpgradeSlice(set, get),

  ...createTaskSlice(set, get),

  ...createSaveSlice(set, get),

}));