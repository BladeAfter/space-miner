import "../styles/floatingCoin.css";

export default function FloatingCoin({ x, y }) {
  return (
    <div
      className="floating-coin"
      style={{
        left: x,
        top: y,
      }}
    >
      🪙
    </div>
  );
}