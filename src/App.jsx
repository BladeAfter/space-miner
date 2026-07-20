import { useState } from "react";

import LoadingScreen from "./components/LoadingScreen";
import Game from "./components/Game";

export default function App() {
  const [loading, setLoading] = useState(true);

  return loading ? (
    <LoadingScreen onFinish={() => setLoading(false)} />
  ) : (
    <Game />
  );
}