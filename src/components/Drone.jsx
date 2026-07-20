import "../styles/drone.css";

export default function Drone() {
  return (
    <section className="drone-area">

      <div className="stars"></div>

      <div className="drone">

        <img
          src="/drone.png"
          alt="Drone"
          className="drone-image"
        />

        <div className="engine-flame"></div>

      </div>

    </section>
  );
}