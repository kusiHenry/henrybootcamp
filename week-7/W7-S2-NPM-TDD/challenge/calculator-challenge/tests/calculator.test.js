const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator Tests', () => {
  // Addition tests
  describe('Addition', () => {
    test('adds 2 + 3 to equal 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('adds negative numbers correctly', () => {
      expect(add(-1, -2)).toBe(-3);
    });

    test('adds zero correctly', () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  // Subtraction tests
  describe('Subtraction', () => {
    test('subtracts 5 - 3 to equal 2', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test('subtracts negative numbers correctly', () => {
      expect(subtract(-1, -2)).toBe(1);
    });

    test('subtracts from zero correctly', () => {
      expect(subtract(0, 5)).toBe(-5);
    });
  });

  // Multiplication tests
  describe('Multiplication', () => {
    test('multiplies 3 * 4 to equal 12', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    test('multiplies by zero correctly', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    test('multiplies negative numbers correctly', () => {
      expect(multiply(-2, 3)).toBe(-6);
    });
  });

  // Division tests
  describe('Division', () => {
    test('divides 10 / 2 to equal 5', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('divides negative numbers correctly', () => {
      expect(divide(-10, 2)).toBe(-5);
    });

    test('returns float when dividing uneven numbers', () => {
      expect(divide(5, 2)).toBe(2.5);
    });

    test('throws error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow('Division by zero');
    });
  });
});