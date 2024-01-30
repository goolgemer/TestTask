const currencies = document.querySelectorAll(".currency");
const prices = document.querySelectorAll(".price");
const periods = document.querySelectorAll(".period");

currencies.forEach((currency) => {
  currency.addEventListener("click", function () {
    if (currency.textContent == "$") {
      currencies.forEach((curr) => (curr.textContent = "₽"));
      prices.forEach((price) => {
        const currentPrice = parseFloat(price.textContent);
        const convertedPrice = currentPrice * 89; // ~ курс 1 доллара
        price.textContent = Math.round(convertedPrice);
      });
    } else {
      currencies.forEach((curr) => (curr.textContent = "$"));
      prices.forEach((price) => {
        const currentPrice = parseFloat(price.textContent);
        const convertedPrice = currentPrice / 89; //~ курс 1 доллара
        price.textContent = Math.round(convertedPrice);
      });
    }
  });
});

periods.forEach((period) => {
  period.addEventListener("click", function () {
    if (period.innerText === "/Months") {
      console.log(period.innerText);
      periods.forEach((p) => {
        p.innerText = "/Day";
      });
      prices.forEach((price) => {
        const currentPrice = parseFloat(price.textContent);
        const convertedPrice = currentPrice / 30;
        price.textContent = Math.round(convertedPrice);
      });
    } else {
      periods.forEach((p) => {
        p.innerText = "/Months";
      });

      prices.forEach((price) => {
        const currentPrice = parseFloat(price.textContent);
        const updatedPrice = Math.round(currentPrice * 30);
        price.textContent = updatedPrice;
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".cards .card");

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("visible");
    }, index * 300);
  });
});
