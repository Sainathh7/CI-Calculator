const {
  add,
  subtract,
  multiply,
  divide,
} = require("./calculator");

test("adds 2 + 4 = 6", () => {
  expect(add(2, 4)).toBe(6);
});

test("subtracts 5 - 2 = 3", () => {
  expect(subtract(5, 2)).toBe(3);
});

test("multiplies 3 * 4 = 12", () => {
  expect(multiply(3, 4)).toBe(12);
});

test("divides 10 / 2 = 5", () => {
  expect(divide(10, 2)).toBe(5);
});
