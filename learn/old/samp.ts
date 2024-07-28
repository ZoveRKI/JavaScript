type ValidatorFunction = (...args: any[]) => boolean;

function validateAll(...validators: ValidatorFunction[]): boolean[] {
  return validators.map((validator) => validator());
}

const isPositive = (n: number) => n > 0;
const isEven = (n: number) => n % 2 === 0;
const isLengthGreaterThan5 = (s: string) => s.length > 5;

const results = validateAll(
  () => isPositive(10),
  () => isEven(3),
  () => isLengthGreaterThan5("Hello, World!")
);

console.log(results);
