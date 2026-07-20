import { useGameStore } from "../store/gameStore";
import { formatNumber } from "../utils/formatNumber";

import "../styles/offlineReward.css";

export default function OfflineReward() {

  const offlineCoins = useGameStore((state) => state.offlineCoins);
  const offlineCrystals = useGameStore((state) => state.offlineCrystals);
  const offlineTime = useGameStore((state) => state.offlineTime);

  const claimOfflineReward = useGameStore(
    (state) => state.claimOfflineReward
  );

  if (offlineCoins <= 0 && offlineCrystals <= 0) {
    return null;
  }

  const hours = Math.floor(offlineTime / 3600);
  const minutes = Math.floor((offlineTime % 3600) / 60);

  return (

    <section className="offline-reward">

      <div className="offline-title">
        💰 Produção Offline
      </div>

      <div className="offline-time">
        Você ficou ausente por
        <br />
        <strong>
          {hours}h {minutes}min
        </strong>
      </div>

      <div className="offline-items">

        <div className="offline-item">
          🪙 +{formatNumber(offlineCoins)}
        </div>

        {offlineCrystals > 0 && (

          <div className="offline-item">
            💎 +{formatNumber(offlineCrystals)}
          </div>

        )}

      </div>

      <button
        className="offline-button"
        onClick={claimOfflineReward}
      >
        RESGATAR
      </button>

    </section>

  );

}