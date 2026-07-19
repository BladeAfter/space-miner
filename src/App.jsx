import { useEffect, useState } from "react";

import LoadingScreen from "./components/LoadingScreen";
import Game from "./components/Game";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <Game />
      )}
    </>
  );
}

export default App;