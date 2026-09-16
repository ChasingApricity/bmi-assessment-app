// This listens for when the user clicks the "Calculate Result" button
document.querySelector('form').addEventListener('submit', function(event) {
    // 1. Stop the page from refreshing
    event.preventDefault();

    // 2. Grab all the data the user typed in
    const name = document.getElementById('studentName').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const dobInput = document.getElementById('dob').value;
    const heightCm = parseFloat(document.getElementById('height').value);
    const weightKg = parseFloat(document.getElementById('weight').value);

    // 3. Calculate the standard BMI (Weight in kg / Height in m squared)
    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);

    // 4. Calculate exact Age in Months (Required for WHO 2007 data)
    const dob = new Date(dobInput);
    const today = new Date();
    
    let ageMonths = (today.getFullYear() - dob.getFullYear()) * 12 + (today.getMonth() - dob.getMonth());
    // Adjust if the current day of the month is before the birth day
    if (today.getDate() < dob.getDate()) {
        ageMonths--; 
    }

    // 5. Temporarily show the result in a popup window to test if it works
    alert(`Success!\nStudent: ${name}\nAge: ${ageMonths} months\nBMI: ${bmi.toFixed(2)}`);
});
