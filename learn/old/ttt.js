function tax_of_income(taxable_income){
  return taxable_income * rate(taxable_income) - deduction(taxable_income);
}

function rate(taxable_income) {
  const t = taxable_income/1000;
  if(t <= 1949) {
    return 0.05;
  } else if(t <= 3299) {
    return 0.1;
  } else if(t <= 6949) {
    return 0.2
  }  else if(t <= 8999) {
    return 0.23;
  }  else if(t <= 17999) {
    return 0.33;
  }  else if(t <= 39999) {
    return 0.4;
  }  else {
    return 0.45;
  }
}

function deduction(taxable_income) {
  const t = taxable_income/1000;
  if(t <= 1949) {
    return 0;
  } else if(t <= 3299) {
    return 97500;
  } else if(t <= 6949) {
    return 427500
  }  else if(t <= 8999) {
    return 636000;
  }  else if(t <= 17999) {
    return 1536000;
  }  else if(t <= 39999) {
    return 2796000;
  }  else {
    return 4796000;
  }
}

function taxable_income(salary_earnings) {
  s = salary_income(salary_earnings);
  return s - basic_deduction(s);
}

function salary_income(salary_earnings) {
  return salary_earnings - salary_deduction(salary_earnings);
}

function salary_deduction(salary_earnings) {
  const t = salary_earnings;
  if(t <= 1625000) {
    return 55000;
  } else if(t <= 1800000) {
    return t*0.4-100000;
  } else if(t <= 3600000) {
    return t*0.3+80000
  }  else if(t <= 6600000) {
    return t*0.2+440000;
  }  else if(t <= 8500000) {
    return t*0.1+1100000;
  }  else {
    return 1950000;
  }
}

//todo
function basic_deduction(salary_income) {
  const t = salary_income/10000;
  if(t <= 2400) {
    return 480000;
  } else if(t <= 2450) {
    return 320000
  } else if(t <= 2500) {
    return 160000
  }  else {
    return 0;
  }
}

a = 7000000 // taxable_income
b = 7088000 // taxable_income

console.log({
  'taxable_income': taxable_income(a),
  'salary_income': salary_income(a),
  'salary_deduction': salary_deduction(a),
  'basic_deduction': basic_deduction(a),
  
  'rate': rate(taxable_income(a)),
  'deduction': deduction(taxable_income(a)),
//   'tax_of_income 7,000,000円×0.23 - 636,000円= 974,000円': tax_of_income(7000000),
  'tax_of_income': tax_of_income(taxable_income(a))
});
