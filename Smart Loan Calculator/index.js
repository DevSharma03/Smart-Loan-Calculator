const CalculateResult1 = () => {
    let inputAmount = parseFloat(document.querySelector("#inputAmount").value);
    let inputInterest = parseFloat(document.querySelector("#inputInterest").value) / 100 / 12;
    let inputYear = parseFloat(document.querySelector("#inputYear").value) * 12;

    let resultDiv1 = document.querySelector(".result-monthly-payment");
    let resultDiv2 = document.querySelector(".result-total-payment");
    let resultDiv3 = document.querySelector(".result-total-interest");

    // Clear previous results
    resultDiv1.innerHTML = "";
    resultDiv2.innerHTML = "";
    resultDiv3.innerHTML = "";

    function calculateLoan() {
        if (isNaN(inputAmount) || isNaN(inputInterest) || isNaN(inputYear) || inputAmount <= 0 || inputInterest <= 0 || inputYear <= 0) {
            alert("Please enter valid, positive values for all fields.");
            return;
        }

        const x = Math.pow(1 + inputInterest, inputYear);
        const monthly = (inputAmount * x * inputInterest) / (x - 1);

        if (isFinite(monthly)) {
            const total = monthly * inputYear;
            const totalInterest = total - inputAmount;
            resultDiv1.textContent = `Rs.${monthly.toFixed(2)}`;
            resultDiv2.textContent = `Rs.${total.toFixed(2)}`;
            resultDiv3.textContent = `Rs.${totalInterest.toFixed(2)}`;
        } else {
            alert("Calculation error! Please check your input values.");
        }
    }

    // Call the calculation function
    calculateLoan();
};

document.querySelector(".calculateResult").addEventListener("click", CalculateResult1);
