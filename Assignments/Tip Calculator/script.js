function calculateTip() {
    const billAmount = document.getElementById('billAmount').value;
    const serviceQuality = document.getElementById('serviceQuality').value;
    const totalPeople = document.getElementById('totalPeople').value;
    const resultSection = document.getElementById('resultSection');
    const tipAmountDisplay = document.getElementById('tipAmount');

    if (billAmount === "" || serviceQuality == "0" || totalPeople === "") {
        alert("Please enter values in all fields");
        return;
    }

    if (totalPeople < 1) {
        alert("Number of people must be at least 1");
        return;
    }

    const totalTip = billAmount * serviceQuality;
    const tipPerPerson = totalTip / totalPeople;

    tipAmountDisplay.innerText = tipPerPerson.toFixed(2);
    resultSection.classList.remove('d-none');
}