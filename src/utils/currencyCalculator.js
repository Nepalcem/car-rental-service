const rates = {
    euro: 0.9,
    hrivna: 37,
}

export function calculateCurrency(price, currency = "USD") {
    switch (currency) {
        case "UAH":
            return price * rates.hrivna;
        case "EUR":
            return price * rates.euro;
        default: return price;
    }
}