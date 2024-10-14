document.getElementById("age-form").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    const birthDateInput = document.getElementById("birthDate").value;
    const resultElement = document.getElementById("result");

    const birthDate = new Date(birthDateInput);

    if (isNaN(birthDate.getTime())) {
        resultElement.innerHTML = "Please enter a valid date.";
        return;
    }

    const today = new Date();
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    resultElement.innerHTML = `You are ${ageDays} days, ${ageMonths} months, and ${ageYears} years old.`;
});
