function calculateNetSalary(basicSalary, benefits) {
    // Define PAYE tax brackets
    const taxBrackets = [
        {upper: 24000, rate: 0.10},
        {upper: 32333, rate: 0.25},
        {upper: Infinity, rate: 0.30}
    ];
    const personalRelief = 2400;


    //NHIF rates

    const nhifRates = [
        {upper: 5999, deduction: 150},
        { upper: 5999, deduction: 150 },
        { upper: 7999, deduction: 300 },
        { upper: 11999, deduction: 400 },
        { upper: 14999, deduction: 500 },
        { upper: 19999, deduction: 600 },
        { upper: 24999, deduction: 750 },
        { upper: 29999, deduction: 850 },
        { upper: 34999, deduction: 900 },
        { upper: 39999, deduction: 950 },
        { upper: 44999, deduction: 1000 },
        { upper: 49999, deduction: 1100 },
        { upper: 59999, deduction: 1200 },
        { upper: 69999, deduction: 1300 },
        { upper: 79999, deduction: 1400 },
        { upper: 89999, deduction: 1500 },
        { upper: 99999, deduction: 1600 },
        { upper: Infinity, deduction: 1700 }
    ];

     // NSSF rates
     const nssfRate = 0.06; // 6%
     const tierOneLimit = 6000; // Tier I
     
     // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate PAYE
    let taxableIncome = grossSalary;
    let paye = 0;

    for (const bracket of taxBrackets) {
        if (taxableIncome <= bracket.upper) {
            paye += taxableIncome * bracket.rate;
            break;
        } else {
            paye += bracket.upper * bracket.rate;
            taxableIncome -= bracket.upper;
        }
    }
    
     // Apply personal relief
     paye = Math.max(0, paye - personalRelief);

     // Calculate NHIF deduction
     const nhifDeduction = nhifRates.find(rate => grossSalary <= rate.upper).deduction;
 
     // Calculate NSSF deduction
     const nssfDeduction = Math.min(grossSalary, tierOneLimit) * nssfRate;
 
     // Calculate net salary
     const netSalary = grossSalary - (paye + nhifDeduction + nssfDeduction);

     
 
}