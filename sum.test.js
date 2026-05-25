import sum from "./sum.js";


describe('Sum Function Tests', () => {
  
  test('1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('5 + 5 = 10', () => {
    expect(sum(5, 5)).toBe(10);
  });

  test('negative numbers', () => {
    expect(sum(-1, -1)).toBe(-2);
  });

});