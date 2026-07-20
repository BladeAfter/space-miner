import { useGameStore } from "../../store/gameStore";

export default function UpgradeCard({ upgrade }) {

  const upgrades = useGameStore((state) => state.upgrades);

  console.log("STORE:", upgrades);

  return (
    <div
      style={{
        background: "#222",
        color: "#fff",
        marginBottom: 12,
        padding: 20,
        border: "2px solid yellow",
      }}
    >
      <h2>{upgrade.name}</h2>

      <p>ID: {upgrade.id}</p>

      <p>
        Dados:
        {JSON.stringify(upgrades?.[upgrade.id])}
      </p>
    </div>
  );
}