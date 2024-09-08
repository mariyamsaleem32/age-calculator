document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault(); 

    let birthDate = new Date(document.getElementById("birthDate").value);

    if (isNaN(birthDate.getTime())) {
        document.getElementById("result").innerHTML = "Please enter a valid date.";
        return;
    }

    let today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
    
        const daysInMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        ageDays += daysInMonth;
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById("result").innerHTML = `You are ${ageDays} days, ${ageMonths} months, and ${ageYears} years old.`;
});
