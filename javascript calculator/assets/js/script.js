document.getElementById("calculatorForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const operand1 = parseFloat(document.getElementById("operand1").value);
    const operand2 = parseFloat(document.getElementById("operand2").value);
    const operation = document.querySelector('input[name="operation"]:checked');
    const operand1Error = document.getElementById("operand1Error");
    const operand2Error = document.getElementById("operand2Error");
    const operatorError = document.getElementById("operatorError");
    const resultElement = document.getElementById("result");

    // Hide error messages
    operand1Error.style.display = "none";
    operand2Error.style.display = "none";
    operatorError.style.display = "none";

    let hasError = false;

    // Validate operands
    if (isNaN(operand1)) {
        operand1Error.style.display = "inline";
        hasError = true;
    }

    if (isNaN(operand2)) {
        operand2Error.style.display = "inline";
        hasError = true;
    }

    // Validate operation selection
    if (!operation) {
        operatorError.style.display = "inline";
        hasError = true;
    }

    if (hasError) {
        return;
    }

    // Calculate result
    let result;
    switch (operation.value) {
        case "add":
            result = operand1 + operand2;
            break;
        case "subtract":
            result = operand1 - operand2;
            break;
        case "multiply":
            result = operand1 * operand2;
            break;
        case "divide":
            if (operand2 === 0) {
                resultElement.textContent = "Result: Cannot divide by zero.";
                return;
            }
            result = operand1 / operand2;
            break;
        default:
            resultElement.textContent = "Result: Invalid operation.";
            return;
    }

    resultElement.textContent = `Result: ${result}`;
});

document.getElementById("clear").addEventListener("click", function () {
    document.getElementById("operand1").value = "";
    document.getElementById("operand2").value = "";
    const operationButtons = document.querySelectorAll('input[name="operation"]');
    operationButtons.forEach(button => button.checked = false);
    
    document.getElementById("operand1Error").style.display = "none";
    document.getElementById("operand2Error").style.display = "none";
    document.getElementById("operatorError").style.display = "none";
    document.getElementById("result").textContent = "Result:";
});
