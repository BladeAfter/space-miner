export function formatNumber(value) {

  if (value < 1000) {
    return value.toFixed(0);
  }

  const units = [
    "K",
    "M",
    "B",
    "T",
    "Qa",
    "Qi",
    "Sx",
    "Sp",
    "Oc",
    "No",
    "Dc"
  ];

  let unit = -1;
  let number = value;

  while (number >= 1000 && unit < units.length - 1) {
    number /= 1000;
    unit++;
  }

  if (number >= 100) {
    return `${number.toFixed(0)}${units[unit]}`;
  }

  if (number >= 10) {
    return `${number.toFixed(1)}${units[unit]}`;
  }

  return `${number.toFixed(2)}${units[unit]}`;
}