export function assert_array_eq(left, right, msg = "") {
  if (left.length !== right.length) {
    throw new Error(`${msg}\nLeft : ${left}\nRight: ${right}`);
  }

  for (let i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      throw new Error(`${msg}\nLeft : ${left}\nRight: ${right}`);
    }
  }

  console.log("Test passed:", msg);
}
