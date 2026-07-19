import gameBg from "../assets/game-bg.png";

function Game() {
  return (
    <div
      style={{
        backgroundImage: `url(${gameBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        width: "100%",
        height: "100vh",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        color: "white",
        fontSize: "48px",
        fontWeight: "bold",
        textShadow: "0 0 15px rgba(0,0,0,0.8)",

        overflow: "hidden",
      }}
    >
      🚀 SPACE MINER
    </div>
  );
}

export default Game;