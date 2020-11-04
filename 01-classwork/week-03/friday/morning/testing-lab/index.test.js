// import fizzBuzz from './index';
const fizzBuzz = require('./index');

describe('fizzBuzz', () => {
  test('function is defined', () => {
    expect(fizzBuzz).toBeDefined();
  });

  test('should return "fizz" when I give a multiple of 3', () => {
    expect(fizzBuzz(3)).toBe('fizz');
    expect(fizzBuzz(6)).toBe('fizz');
  });

  test('should return "buzz" when I give a multiple of 5', () => {
    expect(fizzBuzz(5)).toBe('buzz');
    expect(fizzBuzz(10)).toBe('buzz');
  });

  test('should return "fizzbuzz" when I give a multiple of 5 and 3', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
    expect(fizzBuzz(30)).toBe('fizzbuzz');
  });
});
