function calculateAge() {
    const birthDateInput = document.getElementById('birthDate').value;
    const currentDateInput = document.getElementById('currentDate').value;
    const resultElement = document.getElementById('resultText');

    if (!birthDateInput || !currentDateInput) {
        resultElement.innerText = "Please select both dates.";
        resultElement.classList.add("text-danger");
        resultElement.classList.remove("text-dark");
        return;
    }

    const birthDate = new Date(birthDateInput);
    const currentDate = new Date(currentDateInput);

    if (birthDate > currentDate) {
        resultElement.innerText = "Birth date cannot be after current date.";
        resultElement.classList.add("text-danger");
        resultElement.classList.remove("text-dark");
        return;
    }

    //this part reference from gpt

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();
    const dayDiff = currentDate.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    resultElement.classList.remove("text-danger");
    resultElement.classList.add("text-dark");
    resultElement.innerText = `Your age is ${age} years.`;
}