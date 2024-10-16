const { add, subtract, multiply} = require('../math.js');

describe('Simple Arithmetic tests', () => {
  test('addition', () => {
    expect(add(5, 3)).toBe(8);
  });

  test('subtract', () => {
    expect(subtract(5, 1)).toBe(4);
  });

  test('multiply', () => {
    expect(multiply(2, 3)).toBe(6);
  });
});
