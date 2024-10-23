document.getElementById("showResults").addEventListener("click", function () {
    const baseCurrency = document.getElementById("baseCurrency").value;
    const convertCurrency = document.getElementById("convertCurrency").value;
    const fromDate = document.getElementById("fromDate").value;
    const toDate = document.getElementById("toDate").value;

    const baseCurrencyError = document.getElementById("baseCurrencyError");
    const convertCurrencyError = document.getElementById("convertCurrencyError");
    const fromDateError = document.getElementById("fromDateError");
    const toDateError = document.getElementById("toDateError");

    // Hide previous errors
    baseCurrencyError.style.display = "none";
    convertCurrencyError.style.display = "none";
    fromDateError.style.display = "none";
    toDateError.style.display = "none";

    let hasError = false;

    // Validate input fields
    if (!baseCurrency) {
        baseCurrencyError.style.display = "block";
        hasError = true;
    }

    if (!convertCurrency) {
        convertCurrencyError.style.display = "block";
        hasError = true;
    }

    if (!fromDate) {
        fromDateError.style.display = "block";
        hasError = true;
    }

    if (!toDate) {
        toDateError.style.display = "block";
        hasError = true;
    }

    if (hasError) {
        return;
    }

    // Example of fetching currency data (replace with actual API)
    const mockData = [
        { date: '2020-02-19', rate: 0.773 },
        { date: '2020-02-20', rate: 0.774 },
        { date: '2020-02-21', rate: 0.776 },
        { date: '2020-02-22', rate: 0.771 },
        { date: '2020-02-23', rate: 0.772 },
        { date: '2020-02-24', rate: 0.770 },
        { date: '2020-02-25', rate: 0.775 },
        { date: '2020-02-26', rate: 0.778 }
    ];

    const labels = mockData.map(data => data.date);
    const dataPoints = mockData.map(data => data.rate);

    displayChart(labels, dataPoints);
});

document.getElementById("clear").addEventListener("click", function () {
    document.getElementById("baseCurrency").value = "";
    document.getElementById("convertCurrency").value = "";
    document.getElementById("fromDate").value = "";
    document.getElementById("toDate").value = "";

    document.getElementById("baseCurrencyError").style.display = "none";
    document.getElementById("convertCurrencyError").style.display = "none";
    document.getElementById("fromDateError").style.display = "none";
    document.getElementById("toDateError").style.display = "none";

    const chartCanvas = document.getElementById("currencyChart");
    chartCanvas.style.display = "none";
});

function displayChart(labels, dataPoints) {
    const chartCanvas = document.getElementById("currencyChart");
    chartCanvas.style.display = "block";

    new Chart(chartCanvas, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'One USD to GBP',
                data: dataPoints,
                borderColor: 'turquoise',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'category',
                    title: { display: true, text: 'Date' }
                },
                y: {
                    beginAtZero: false,
                    title: { display: true, text: 'GBP' }
                }
            }
        }
    });
}
