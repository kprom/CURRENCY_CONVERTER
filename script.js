const amountInput = document.getElementById("amountInput");
const valueSelect = document.getElementById("valueSelect");
const convertButton = document.getElementById("convertButton");
const result = document.getElementById("result");

convertButton.addEventListener("click", () => {
    const amount = amountInput.value;
    const currency = valueSelect.value;

if (amount !== "" && currency !== "") {
    fetch(`https://api.nbp.pl/api/exchangerates/rates/A/${currency}/?format=json`)
        .then((response) => response.json())
        .then((data) => {
            const rate = data.rates[0].mid;
            const convertedAmount = amount * rate;
            result.textContent = convertedAmount.toFixed(2) + " PLN";
        })
        .catch((error) => {
            console.log(error);
            result.textContent = "Error occurred downloading data";
        });
}

});