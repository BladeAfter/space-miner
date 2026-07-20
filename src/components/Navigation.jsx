import { useState } from "react";

import UpgradeList from "./upgrades/UpgradeList";

import "../styles/navigation.css";

export default function Navigation() {

  const [tab, setTab] = useState("upgrades");

  return (
    <section className="navigation">

      <div className="nav-tabs">

        <button
          className={tab === "upgrades" ? "active" : ""}
          onClick={() => setTab("upgrades")}
        >
          Upgrades
        </button>


        <button
          className={tab === "missions" ? "active" : ""}
          onClick={() => setTab("missions")}
        >
          Missões
        </button>


        <button
          className={tab === "shop" ? "active" : ""}
          onClick={() => setTab("shop")}
        >
          Loja
        </button>

      </div>


      <div className="nav-content">

        {tab === "upgrades" && (
          <UpgradeList />
        )}


        {tab === "missions" && (
          <div className="coming">
            Em breve
          </div>
        )}


        {tab === "shop" && (
          <div className="coming">
            Loja em breve
          </div>
        )}

      </div>

    </section>
  );
}