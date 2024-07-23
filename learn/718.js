function tax_of_income(income) {
    // code
    function tax_r(income){
        if (income >= 1000 && income <= 1949000 ) {
            return 0.05;
        }else if (income >= 1950000 && income <= 3299000){
            return 0.1
        }else if (income >= 3300000 && income <= 6949000){
            return 0.2
        }else if (income >= 6950000 && income <= 8999000){
            return 0.23
        }else if (income >= 9000000 && income <= 17999000){
            return 0.33
        }else if (income >= 18000000 && income <= 39999000){
            return 0.4
        }else {
            return 0.45
        }
    }
    function d(income){
        if (income >= 1000 && income <= 1949000 ) {
            return 0;
        }else if (income >= 1950000 && income <= 3299000){
            return 97500
        }else if (income >= 3300000 && income <= 6949000){
            return 427500
        }else if (income >= 6950000 && income <= 8999000){
            return 636000
        }else if (income >= 9000000 && income <= 17999000){
            return 1536000
        }else if (income >= 18000000 && income <= 39999000){
            return 2796000
        }else {
            return 4796000
        }
    }
    function salary_deduction(income){
        if (income <= 1625000) {
            return 550000
        }else if (income >= 1625001 && income <= 1800000){
            return income*0.4 - 100000
        }else if (income >= 1800001 && income <= 3600000){
            return income*0.3 + 80000
        }else if (income >= 3600001 && income <= 6600000){
            return income*0.2 + 440000
        }else if (income >= 6600001 && income <= 8500000){
            return income*0.1 + 1100000
        }else {
            return 1950000
        }
    }
    function basic_deduction(income){
        if (income <= 24000000) {
            return 480000
        }else if (income > 24000000 && income <= 24500000) {
            return 320000
        }else if (income > 24500000 && income <= 25000000) {
            return 160000
        }else {
            return 0
        }
    }
    const incomes = income
    // console.log(incomes)
    const salary_income = incomes - salary_deduction(incomes)
    // console.log(salary_income)
    const taxable_income = salary_income - basic_deduction(salary_income)
    const tax_ofIncome = taxable_income*tax_r(taxable_income) - d(taxable_income)
    return tax_ofIncome
}
income = 7000000
x = tax_of_income(income)
console.log(x)