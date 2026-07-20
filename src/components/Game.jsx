import { useEffect } from "react";

import Background from "./Background";
import Header from "./Header";
import Drone from "./Drone";
import Navigation from "./Navigation";
import OfflineReward from "./OfflineReward";

import useProduction from "../hooks/useProduction";
import useOffline from "../hooks/useOffline";
import useAutoSave from "../hooks/useAutoSave";

import { loadGame } from "../services/storage";
import { useGameStore } from "../store/gameStore";

import "../styles/game.css";

export default function Game() {

  const load = useGameStore((state) => state.loadGame);

  useProduction();
  useOffline();
  useAutoSave();

  useEffect(() => {
    const save = loadGame();

    if (save) {
      load(save);
    }
  }, [load]);

  return (
    <main className="game">

      <Background />

      <Header />

      <section className="game-center">
        <Drone />
      </section>

      <section className="game-navigation">
        <Navigation />
      </section>

      <OfflineReward />

    </main>
  );
}