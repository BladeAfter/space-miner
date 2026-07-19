import { useEffect, useState } from "react";
import "../styles/loading.css";

const messages = [
  "Inicializando...",
  "Carregando Sistema...",
  "Preparando Drone...",
  "Conectando ao Espaço...",
  "Pronto!"
];

function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState(messages[0]);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += 2;

      setProgress(value);

      if (value < 20) setMessage(messages[0]);
      else if (value < 40) setMessage(messages[1]);
      else if (value < 60) setMessage(messages[2]);
      else if (value < 80) setMessage(messages[3]);
      else setMessage(messages[4]);

      if (value >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          onFinish();
        }, 500);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="loading-screen">

      <div className="stars"></div>

      <div className="loading-content">

        <div className="rocket">
          🚀
        </div>

        <h1>SPACE MINER</h1>

        <p className="loading-message">
          {message}
        </p>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>

        </div>

        <span>{progress}%</span>

      </div>

    </div>
  );
}

export default LoadingScreen;