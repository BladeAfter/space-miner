import { useEffect, useRef } from "react";
import { useGameStore } from "../store/gameStore";

export default function useProduction() {

  const produce = useGameStore((state) => state.produce);

  const lastTime = useRef(Date.now());

  useEffect(() => {

    const interval = setInterval(() => {

      const now = Date.now();

      const delta = (now - lastTime.current) / 1000;

      lastTime.current = now;

      produce(delta);

    }, 200);

    return () => clearInterval(interval);

  }, [produce]);

}