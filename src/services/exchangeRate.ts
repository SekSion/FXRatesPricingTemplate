export const getCurrencies = async () => {
  const res = await fetch("https://openexchangerates.org/api/currencies.json");

  if (!res.ok) {
    throw new Error("Failed to fetch currencies");
  }

  return res.json();
};

export const getRateCurrency = async () => {
  const url = `https://openexchangerates.org/api/latest.json?app_id=${process.env.NEXT_PUBLIC_API}&base=USD`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch currencies");
  }

  return res.json();
};

export const getCurrentRates = () => {
  const rates = [
    { name: "USD", symbol: "$" },
    { name: "GBP", symbol: "£" },
    { name: "CAD", symbol: "$" },
    { name: "AUD", symbol: "$" },
    { name: "EUR", symbol: "€" },
    { name: "JPY", symbol: "¥" },
    { name: "INR", symbol: "₹" },
  ];
  return rates;
};

export const getCurrentSymbol = (name: string) => {
  const currency = getCurrentRates().find((rate) => rate.name === name);
  return currency ? currency.symbol : "";
};
