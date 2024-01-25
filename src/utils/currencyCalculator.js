export const currencies = [
  { code: "USD", symbol: "$", flag: "US", rate: 1 },
  { code: "EUR", symbol: "€", flag: "EU", rate: 0.9 },
  { code: "UAH", symbol: "₴", flag: "UA", rate: 37 },
  // Add more currencies as needed
];

export function calculateCurrency(price, currency = "USD") {
  const selectedCurrency = currencies.find((c) => c.code === currency);

  if (selectedCurrency) {
    const { rate, symbol } = selectedCurrency;

    switch (currency) {
      case "UAH":
        return `${symbol}${price * rate}`;
      case "EUR":
        return `${symbol}${price * rate}`;
      default:
        return `${symbol}${price}`;
    }
  }
}
