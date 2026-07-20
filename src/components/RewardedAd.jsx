import { useState } from "react";
import "../styles/task.css";

export default function RewardedAd({
  open,
  onClose,
  onReward,
}) {

  const [loading, setLoading] = useState(false);

  if (!open) return null;


  const watchAd = async () => {

    try {

      setLoading(true);

      await window.showGiga();

      // usuário assistiu e completou
      onReward();

      onClose();


    } catch (e) {

      console.log("Erro no anúncio:", e);

      onClose();

    } finally {

      setLoading(false);

    }

  };


  return (
    <div className="ad-overlay">

      <div className="ad-window">

        <div className="ad-header">
          <span>📺 Reward Video</span>
        </div>


        <div className="ad-video">

          {loading
            ? "Carregando anúncio..."
            : "Clique para assistir anúncio"}

        </div>


        <div className="ad-footer">

          <h2>
            Ganhe recompensa
          </h2>

          <p>
            Assista o anúncio completo.
          </p>


          <button
            className="task-button"
            onClick={watchAd}
            disabled={loading}
          >
            {loading ? "Aguarde..." : "ASSISTIR"}
          </button>

        </div>

      </div>

    </div>
  );
}