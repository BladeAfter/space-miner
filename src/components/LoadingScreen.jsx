import { useEffect, useState } from "react";
import "../styles/loading.css";

const messages = [
  "Inicializando...",
  "Carregando Sistema...",
  "Preparando Drone...",
  "Conectando ao Espaço...",
  "Pronto!"
];

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const timer = setInterval(() => {
      value++;

      setProgress(value);

      if (value >= 100) {
        clearInterval(timer);

        setTimeout(() => {
          onFinish();
        }, 300);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [onFinish]);

  let message = messages[0];

  if (progress >= 20) message = messages[1];
  if (progress >= 40) message = messages[2];
  if (progress >= 60) message = messages[3];
  if (progress >= 80) message = messages[4];

  return (
    <div className="loading-screen">
      <div className="stars"></div>

      <div className="loading-content">
        <div className="rocket">🚀</div>

        <h1>SPACE MINER</h1>

        <p className="loading-message">
          {message}
        </p>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${progress}%`
            }}
          />
        </div>

        <span className="loading-percent">
          {progress}%
        </span>
      </div>
    </div>
  );
}