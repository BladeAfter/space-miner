export function initTelegram() {
  if (!window.Telegram || !window.Telegram.WebApp) {
    console.log("Telegram WebApp não encontrado.");
    return;
  }

  const tg = window.Telegram.WebApp;

  tg.ready();
  tg.expand();

  document.body.style.backgroundColor = tg.themeParams.bg_color || "#060B17";

  return tg;
}