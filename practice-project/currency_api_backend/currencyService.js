// currencyService.js
const currencyData = {
  USD: { low: 89.11, high: 90.14 },
  EUR: { low: 97.5, high: 99.2 },
  GBP: { low: 114.8, high: 116.5 },
  JPY: { low: 0.63, high: 0.65 },
  AUD: { low: 60.1, high: 61.25 },
  CAD: { low: 67.5, high: 68.75 },
  CHF: { low: 99.1, high: 100.5 },
  CNY: { low: 12.3, high: 12.75 },
  SGD: { low: 66.2, high: 67.4 },
  NZD: { low: 56.8, high: 57.9 },
};

function getRandomValue(low, high) {
  return Number((Math.random() * (high - low) + low).toFixed(2));
}

function getCurrency(country) {
  const key = country?.toUpperCase();
  const data = currencyData[key];

  if (!data) {
    throw new Error(
      `Invalid currency. Supported: ${Object.keys(currencyData).join(", ")}`
    );
  }

  return {
    country: key,
    value: getRandomValue(data.low, data.high),
    low: data.low,
    high: data.high,
    currency: "INR",
    timestamp: Date.now(),
  };
}

module.exports = {
  getCurrency,
  currencyData,
};
