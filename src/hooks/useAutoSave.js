import { useEffect } from "react";
import { useGameStore } from "../store/gameStore";
import { saveGame } from "../services/storage";

export default function useAutoSave() {

  const getSaveData = useGameStore((state) => state.getSaveData);

  useEffect(() => {

    const interval = setInterval(() => {

      saveGame(getSaveData());

    }, 5000);

    return () => clearInterval(interval);

  }, [getSaveData]);

}