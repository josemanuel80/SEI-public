/* eslint-disable no-undef */

const fns = require('./problems');

describe('hello', () => {
  test('should return "Hello World!" if no argument is passed', () => {
    expect(fns.hello()).toEqual('Hello World!');
  });
  test('should return "Hello <argument>!" if one is passed', () => {
    expect(fns.hello('Mike')).toEqual('Hello Mike!');
  });
});

describe('areaOfCircle', () => {
  test('should find the area of a circle given a radius', () => {
    expect(fns.areaOfCircle(4)).toEqual(50.26548245743669);
    expect(fns.areaOfCircle(10)).toEqual(314.1592653589793);
    expect(fns.areaOfCircle(1)).toEqual(3.141592653589793);
  });
});

describe('celciusToFarenheit', () => {
  test('should convert celcius to farenheit', () => {
    expect(fns.celciusToFarenheit(0)).toEqual(32);
    expect(fns.celciusToFarenheit(-40)).toEqual(-40);
    expect(fns.celciusToFarenheit(100)).toEqual(212);
  });
});

describe('numberReverse', () => {
  test('should reverse a number', () => {
    expect(fns.numberReverse(123)).toEqual(321);
    expect(fns.numberReverse(4001)).toEqual(1004);
  });
  test('should handle decimals', () => {
    expect(fns.numberReverse(78.567)).toEqual(765.87);
  });
});

describe('palindromeCheck', () => {
  test('should check if a word is a palindrome', () => {
    expect(fns.palindromeCheck('pop')).toBe(true);
    expect(fns.palindromeCheck('dog')).toBe(false);
  });
  test('should check if a phrase is a palindrome', () => {
    expect(fns.palindromeCheck('nurses run')).toBe(true);
    expect(fns.palindromeCheck('will not work')).toBe(false);
  });
});

describe('orderStringAlphabetically', () => {
  test('should order a word alphabetically', () => {
    expect(fns.orderStringAlphabetically('happy')).toEqual('ahppy');
  });
  test('should order a phrase alphabetically', () => {
    expect(fns.orderStringAlphabetically('javascript is cool')).toEqual(
      'aacciijlooprsstv',
    );
  });
  test('should be case insensive', () => {
    expect(fns.orderStringAlphabetically('Testing Rocks')).toEqual(
      'cegiknorsstt',
    );
  });
});

xdescribe('titleCase', () => {
  test('should capitalize the first letter of each word', () => {
    expect(fns.titleCase('this is it')).toEqual('This Is It');
  });
});

xdescribe('frame', () => {
  test('should frame a string in asterisks', () => {
    expect(fns.frame('Rumplestiltskin')).toEqual(
      '*******************\n* Rumplestiltskin *\n*******************',
    );
    expect(fns.frame('Hello Kitty')).toEqual(
      '***************\n* Hello Kitty *\n***************',
    );
  });
});
