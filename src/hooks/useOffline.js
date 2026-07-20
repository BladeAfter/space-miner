import { useEffect } from "react";
import { useGameStore } from "../store/gameStore";

export default function useOffline() {

  const applyOffline = useGameStore(
    (state) => state.applyOffline
  );

  useEffect(() => {

    applyOffline();

  }, [applyOffline]);

}