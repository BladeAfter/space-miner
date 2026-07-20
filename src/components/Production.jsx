import { useGameStore } from "../store/gameStore";
import "../styles/production.css";

export default function Production() {

  const coinRate = useGameStore((state) => state.coinRate);
  const crystalRate = useGameStore((state) => state.crystalRate);

  const coinPerMinute = coinRate * 60;
  const crystalPerMinute = crystalRate * 60;

  return (
    <section className="production">

      <div className="production-card">

        <div className="production-icon">
          🪙
        </div>

        <div className="production-info">
          <span className="production-value">
            {coinPerMinute.toFixed(0)}
          </span>

          <span className="production-label">
            moedas/min
          </span>
        </div>

      </div>

      <div className="production-card">

        <div className="production-icon">
          💎
        </div>

        <div className="production-info">
          <span className="production-value">
            {crystalPerMinute.toFixed(1)}
          </span>

          <span className="production-label">
            cristais/min
          </span>
        </div>

      </div>

    </section>
  );

}