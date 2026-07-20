import { useEffect, useState } from "react";
import { useGameStore } from "../store/gameStore";
import RewardedAd from "./RewardedAd";
import "../styles/task.css";

export default function TaskCard({ task }) {
  const [showAd, setShowAd] = useState(false);
  const [, forceUpdate] = useState(0);

  const startTaskCooldown = useGameStore(
    (state) => state.startTaskCooldown
  );

  const getTaskTimeLeft = useGameStore(
    (state) => state.getTaskTimeLeft
  );

  const timeLeft = getTaskTimeLeft(task.id);

  useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate((v) => v + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const rewardPlayer = () => {
    useGameStore.setState((state) => {
      if (task.rewardType === "coins") {
        return {
          coins: state.coins + task.reward,
        };
      }

      if (task.rewardType === "crystals") {
        return {
          crystals: state.crystals + task.reward,
        };
      }

      return state;
    });

    startTaskCooldown(task.id, task.cooldown);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;

    return `${m}:${String(s).padStart(2, "0")}`;
  };

  return (
    <>
      <div
        className="task-card"
        style={{ borderColor: task.color }}
      >
        <div className="task-left">
          <img
            src={task.icon}
            alt={task.title}
            className="task-icon"
          />

          <div>
            <h3 style={{ color: task.color }}>
              {task.title}
            </h3>

            <p>{task.description}</p>

            <span>
              🎁 {task.reward}{" "}
              {task.rewardType === "coins"
                ? "Gold"
                : "Crystals"}
            </span>
          </div>
        </div>

        <button
          className="task-button"
          disabled={timeLeft > 0}
          onClick={() => setShowAd(true)}
        >
          {timeLeft > 0
            ? formatTime(timeLeft)
            : "WATCH"}
        </button>
      </div>

      <RewardedAd
        open={showAd}
        onClose={() => setShowAd(false)}
        onReward={rewardPlayer}
      />
    </>
  );
}