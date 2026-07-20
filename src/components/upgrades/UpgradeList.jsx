import UpgradeCard from "./UpgradeCard";
import { UPGRADES } from "../../data/upgrades";

export default function UpgradeList() {

  console.log(UPGRADES);

  return (
    <div className="upgrade-list">

      <h1 style={{color:"white"}}>
        Total: {UPGRADES.length}
      </h1>

      {UPGRADES.map((upgrade) => (
        <UpgradeCard
          key={upgrade.id}
          upgrade={upgrade}
        />
      ))}

    </div>
  );
}