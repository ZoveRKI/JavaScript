import { assert_array_eq } from "./test";

export function myFilter(fun, thisArg = this) {
  const result = thisArg.reduce((acc, curr, index, thisArg) => {
    if (fun.call(thisArg, curr, index, thisArg)) {
      acc.push(curr);
    }
    return acc;
  }, []);
  return result;
}

Array.prototype.myFilter = myFilter;

// Test myFilter

// Test 1
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = list.myFilter((item) => item % 2 === 0);
const expect = [2, 4, 6, 8, 10];
assert_array_eq(result, expect, "should return only even numbers");

// Test 2
const list2 = [];
const result2 = list2.myFilter((item) => item % 2 === 0);
const expect2 = [];
assert_array_eq(
  result2,
  expect2,
  "should return an empty array when the list is empty"
);

// Test 3
const list3 = [1, 3, 5, 7, 9];
const result3 = list3.myFilter((item) => item % 2 === 0);
const expect3 = [];
assert_array_eq(
  result3,
  expect3,
  "should return an empty array when there are no even numbers"
);

// Test 4
const list4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result4 = list4.myFilter((_, index) => index > 5);
const expect4 = [7, 8, 9, 10];
assert_array_eq(
  result4,
  expect4,
  "should return only numbers with index greater than 5"
);
