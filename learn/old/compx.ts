function validateAll(): boolean[];
function validateAll<A extends any[]>(v1: (...args: A) => boolean): boolean[];
function validateAll<A extends any[], B extends any[]>(
  v1: (...args: A) => boolean,
  v2: (...args: B) => boolean
): boolean[];
function validateAll<A extends any[], B extends any[], C extends any[]>(
  v1: (...args: A) => boolean,
  v2: (...args: B) => boolean,
  v3: (...args: C) => boolean
): boolean[];
function validateAll(
  ...validators: ((...args: any[]) => boolean)[]
): boolean[] {
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
