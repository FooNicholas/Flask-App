function generateTable(data) {
  const tableBody = document.getElementById("table-body");

  for (const [currency, prices] of Object.entries(data)) {
    const row = document.createElement("tr");
    const currencyCell = document.createElement("td");
    const sgdCell = document.createElement("td");
    const usdCell = document.createElement("td");

    currencyCell.textContent = currency;
    sgdCell.textContent = prices.sgd;
    usdCell.textContent = prices.usd;

    row.appendChild(currencyCell);
    row.appendChild(sgdCell);
    row.appendChild(usdCell);

    tableBody.appendChild(row);
  }
}

fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,monero&vs_currencies=sgd,usd')
  .then(response => response.json())
  .then(data => {
    const cryptoData = {
      "bitcoin": {
        "sgd": data.bitcoin.sgd,
        "usd": data.bitcoin.usd
      },
      "ethereum": {
        "sgd": data.ethereum.sgd,
        "usd": data.ethereum.usd
      },
      "monero": {
        "sgd": data.monero.sgd,
        "usd": data.monero.usd
      }
    };

    generateTable(cryptoData);
  })
  .catch(error => console.error(error));
