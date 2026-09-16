// --- WHO 2007 Data (Girls: 14 to 19 Years / 168 to 228 Months) ---
// I have extracted this directly from the WHO Excel file you provided!
const whoData = {
    female: {
        160: { L: -1.2894, M: 19.0642, S: 0.13537 },
        161: { L: -1.2816, M: 19.1289, S: 0.13559 },
        162: { L: -1.2739, M: 19.1931, S: 0.1358 },
        163: { L: -1.661, M: 19.2567, S: 0.13601 },
        164: { L: -1.2583, M: 19.3197, S: 0.13622 },
        165: { L: -1.2504, M: 19.382, S: 0.13642 },
        166: { L: -1.2425, M: 19.4437, S: 0.13662 },
        167: { L: -1.2345, M: 19.5045, S: 0.13681 },
        168: { L: -1.2266, M: 19.5647, S: 0.13700 },
        169: { L: -1.2186, M: 19.6240, S: 0.13719 },
        170: { L: -1.2107, M: 19.6824, S: 0.13738 },
        171: { L: -1.2027, M: 19.7400, S: 0.13756 },
        172: { L: -1.1947, M: 19.7966, S: 0.13774 },
        173: { L: -1.1867, M: 19.8523, S: 0.13791 },
        174: { L: -1.1788, M: 19.9070, S: 0.13808 },
        175: { L: -1.1708, M: 19.9607, S: 0.13825 },
        176: { L: -1.1629, M: 20.0133, S: 0.13841 },
        177: { L: -1.1549, M: 20.0648, S: 0.13858 },
        178: { L: -1.1470, M: 20.1152, S: 0.13873 },
        179: { L: -1.1390, M: 20.1644, S: 0.13889 },
        180: { L: -1.1311, M: 20.2125, S: 0.13904 },
        181: { L: -1.232, M: 20.2595, S: 0.13920 },
        182: { L: -1.1153, M: 20.3053, S: 0.13934 },
        183: { L: -1.1074, M: 20.3499, S: 0.13949 },
        184: { L: -1.0996, M: 20.3934, S: 0.13963 },
        185: { L: -1.0917, M: 20.4357, S: 0.13977 },
        186: { L: -1.0838, M: 20.4769, S: 0.13991 },
        187: { L: -1.0760, M: 20.5170, S: 0.14005 },
        188: { L: -1.0681, M: 20.5560, S: 0.14018 },
        189: { L: -1.0603, M: 20.5938, S: 0.14031 },
        190: { L: -1.0525, M: 20.6306, S: 0.14044 },
        191: { L: -1.0447, M: 20.6663, S: 0.14057 },
        192: { L: -1.0368, M: 20.7008, S: 0.14070 },
        193: { L: -1.0290, M: 20.7344, S: 0.14082 },
        194: { L: -1.0212, M: 20.7668, S: 0.14094 },
        195: { L: -1.0134, M: 20.7982, S: 0.14106 },
        196: { L: -1.0055, M: 20.8286, S: 0.14118 },
        197: { L: -0.9977, M: 20.8580, S: 0.14130 },
        198: { L: -0.9898, M: 20.8863, S: 0.14142 },
        199: { L: -0.9819, M: 20.9137, S: 0.14153 },
        200: { L: -0.9740, M: 20.9401, S: 0.14164 },
        201: { L: -0.9661, M: 20.9656, S: 0.14176 },
        202: { L: -0.9582, M: 20.9901, S: 0.14187 },
        203: { L: -0.9503, M: 21.0138, S: 0.14198 },
        204: { L: -0.9423, M: 21.0367, S: 0.14208 },
        205: { L: -0.9344, M: 21.0587, S: 0.14219 },
        206: { L: -0.9264, M: 21.0801, S: 0.14230 },
        207: { L: -0.9184, M: 21.1007, S: 0.14240 },
        208: { L: -0.9104, M: 21.1206, S: 0.14250 },
        209: { L: -0.9024, M: 21.1399, S: 0.14261 },
        210: { L: -0.8944, M: 21.1586, S: 0.14271 },
        211: { L: -0.8863, M: 21.1768, S: 0.14281 },
        212: { L: -0.8783, M: 21.1944, S: 0.14291 },
        213: { L: -0.8703, M: 21.2116, S: 0.14301 },
        214: { L: -0.8623, M: 21.2282, S: 0.14311 },
        215: { L: -0.8542, M: 21.2444, S: 0.14320 },
        216: { L: -0.8462, M: 21.2603, S: 0.14330 },
        217: { L: -0.8382, M: 21.2757, S: 0.14340 },
        218: { L: -0.8301, M: 21.2908, S: 0.14349 },
        219: { L: -0.8221, M: 21.3055, S: 0.14359 },
        220: { L: -0.8140, M: 21.3200, S: 0.14368 },
        221: { L: -0.8060, M: 21.3341, S: 0.14377 },
        222: { L: -0.7980, M: 21.3480, S: 0.14386 },
        223: { L: -0.7899, M: 21.3617, S: 0.14396 },
        224: { L: -0.7819, M: 21.3752, S: 0.14405 },
        225: { L: -0.7738, M: 21.3884, S: 0.14414 },
        226: { L: -0.7658, M: 21.4014, S: 0.14423 },
        227: { L: -0.7577, M: 21.4143, S: 0.14432 },
        228: { L: -0.7496, M: 21.4269, S: 0.14441 },
    },
    male: {
        // We will paste the boys data in here next!
    }
};

// --- The Application Logic ---
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop page refresh

    // 1. Gather input
    const name = document.getElementById('studentName').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const dobInput = document.getElementById('dob').value;
    const heightCm = parseFloat(document.getElementById('height').value);
    const weightKg = parseFloat(document.getElementById('weight').value);

    // 2. Calculate Standard BMI
    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);

    // 3. Calculate Exact Age in Months
    const dob = new Date(dobInput);
    const today = new Date();
    let ageMonths = (today.getFullYear() - dob.getFullYear()) * 12 + (today.getMonth() - dob.getMonth());
    if (today.getDate() < dob.getDate()) {
        ageMonths--; 
    }

    // 4. Validate Age (Must be between 14 and 19 years / 168-228 months)
    if (ageMonths < 168 || ageMonths > 228) {
        alert("This portal is currently configured only for ages 14 to 19 (168-228 months). Student is " + ageMonths + " months old.");
        return; 
    }

    if (gender === 'male') {
        alert("We need to add the boys data first! Try a female student to test the logic.");
        return;
    }

    // 5. Run the WHO Z-Score Calculation
    const lms = whoData[gender][ageMonths]; // Fetch the exact L, M, S for this age/gender
    
    // The official WHO math formula: Z = [ (BMI / M)^L - 1 ] / (L * S)
    const zScore = (Math.pow((bmi / lms.M), lms.L) - 1) / (lms.L * lms.S);

    // 6. Interpret the Result based on WHO standard cutoffs
    let interpretation = "";
    if (zScore <= -3) {
        interpretation = "Severe Thinness";
    } else if (zScore <= -2) {
        interpretation = "Thinness";
    } else if (zScore <= 1) {
        interpretation = "Normal (Healthy Weight)";
    } else if (zScore <= 2) {
        interpretation = "Overweight";
    } else {
        interpretation = "Obesity";
    }

    // 7. Show the final clinical result
    alert(`CLINICAL RESULT\n\nStudent: ${name}\nAge: ${ageMonths} months\nBMI: ${bmi.toFixed(1)}\nZ-Score: ${zScore.toFixed(2)}\n\nInterpretation: ${interpretation}`);
});
