import { useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import { useGameStore } from "../store/gameStore";
import { formatNumber } from "../utils/formatNumber";
import RewardedAd from "./RewardedAd";

import "../styles/header.css";

export default function Header() {

  const coins = useGameStore((state) => state.coins);
  const crystals = useGameStore((state) => state.crystals);

  const coinRate = useGameStore((state) => state.coinRate);
  const crystalRate = useGameStore((state) => state.crystalRate);

  const [showAd, setShowAd] = useState(false);

  const openAd = () => {
    setShowAd(true);
  };

  const rewardPlayer = () => {
    useGameStore.setState((state) => ({
      coins: state.coins + 100,
    }));

    console.log("Recompensa recebida");
  };

  return (
    <header className="header">

      <div className="logo">
        <span>🚀</span>

        <div>
          <h1>SPACE</h1>
          <h2>MINER</h2>
        </div>
      </div>


      <div className="resource">

        <div className="icon">🪙</div>

        <div className="resource-info">
          <h3>{formatNumber(coins)}</h3>

          <span className="rate">
            +{formatNumber(coinRate * 60)}/min
          </span>
        </div>

      </div>


      <div className="resource">

        <div className="icon">💎</div>

        <div className="resource-info">
          <h3>{formatNumber(crystals)}</h3>

          <span className="rate">
            +{formatNumber(crystalRate * 60)}/min
          </span>
        </div>

      </div>


      <div className="header-buttons">

        <button
          className="tasks-button"
          onClick={openAd}
        >
          <FaClipboardList />

          <small>TASKS</small>

          <span className="task-dot"></span>
        </button>


        <button className="settings">
          ⚙️
        </button>

      </div>


      <RewardedAd
        open={showAd}
        onClose={() => setShowAd(false)}
        onReward={rewardPlayer}
      />

    </header>
  );
}