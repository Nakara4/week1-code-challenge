function calculateNetSalary(basicSalary, benefits) {
    // Define PAYE tax brackets
    const taxBrackets = [
        {upper: 24000, rate: 0.10},
        {upper: 32333, rate: 0.25},
        {upper: Infinity, rate: 0.30}
    ];
    cost personalRelief = 2400;
    
}