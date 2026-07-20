const STORAGE_KEY = "space-miner-save";

export function saveGame(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function loadGame() {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) return null;

  return JSON.parse(data);
}