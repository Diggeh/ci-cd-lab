const { add, subtract } = require('./calculator');

describe('Calculator Operations', () => {
  describe('add', () => {
    test('adds two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('adds positive and negative numbers correctly', () => {
      expect(add(5, -2)).toBe(3);
    });

    test('adds zeros correctly', () => {
      expect(add(0, 0)).toBe(0);
    });
  });

  describe('subtract', () => {
    test('subtracts two positive numbers correctly', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test('subtracts resulting in a negative number correctly', () => {
      expect(subtract(2, 5)).toBe(-3);
    });

    test('subtracts negative numbers correctly', () => {
      expect(subtract(5, -3)).toBe(8);
    });
  });
});
