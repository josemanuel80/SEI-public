/* eslint-disable no-unused-vars */

// ? write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
// ? eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
function hello(string) {
  if (string == null) return `Hello World!`;
  return `Hello ${string}!`;
}

// ? write a function that will calculate the area of a circle, given the radius
function areaOfCircle(radius) {
  return Math.PI * Math.pow(radius, 2);
}

// ? write a function to convert celcius to farenheit
function celciusToFarenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

// ? write a function that will reverse a number (eg. 456733 become 337654)
function numberReverse(number) {
  parseFloat(number.toString().split('').reverse().join('')) *
    Math.sign(number);

  return (
    parseFloat(number.toString().split('').reverse().join('')) *
    Math.sign(number)
  );
}

// ? write a function to check if a word or phrase is a palindrome returning a boolean
// ? eg. palindromeCheck('dad') => true, palindrome('nonsense') => false
function palindromeCheck(string) {
  let re = /[\W_]/g;
  let lowRegStr = string.toLowerCase().replace(re, '');
  let reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}

// ? write a function that returns the letters of a word or phrase in alphabetical order case insensitive
// ? eg. orderStringAlphabetically('javascript is cool') => 'aacciijlooprsstv'
function orderStringAlphabetically(string) {
  let re = /[\W_]/g;
  string = string.toLowerCase().replace(re, '');
  return orderStringAlphabetically.sort(string.split('').reverse().join(''));
}

// ? write a function that capitalizes the first letter of each word
// ? eg. titleCase('the lord of the rings') => 'The Lord Of The Rings'
function titleCase(string) {}

// ? write a function that frames a string in asterisks (*)
// ?                            ***************
// ? eg: frame('Hello Kitty') => * Hello Kitty *
//  ?                           ***************
function frame(string) {}

// ! Do not alter any of the code below

module.exports = {
  hello,
  areaOfCircle,
  celciusToFarenheit,
  numberReverse,
  palindromeCheck,
  orderStringAlphabetically,
  titleCase,
  frame,
};
