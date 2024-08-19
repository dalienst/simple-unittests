// mathFunctions.test.js
const { add, multiply, subtract, divide, modulus } = require("./mathematics");

describe("Math Functions", () => {
  test("add function", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  test("multiply function", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-1, 1)).toBe(-1);
    expect(multiply(0, 10)).toBe(0);
  });

  test("subtract function", () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(-1, 1)).toBe(-2);
    expect(subtract(0, 0)).toBe(0);
  });

  test("divide function", () => {
    expect(divide(6, 3)).toBe(2);
    expect(divide(-1, 1)).toBe(-1);
    expect(divide(5, 2)).toBe(2.5);
    expect(() => divide(1, 0)).toThrow("Cannot divide by zero");
  });

  test("modulus function", () => {
    expect(modulus(5, 3)).toBe(2);
    expect(modulus(10, 2)).toBe(0);
    expect(modulus(9, 7)).toBe(2);
    expect(() => modulus(1, 0)).toThrow("Cannot find modulus by zero");
  });
});
