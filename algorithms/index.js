export const fizzBuzzString = `function fizzBuzz(number) {
  let array = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push('FizzBuzz');
      continue;
    }
    if (i % 3 === 0) {
      array.push('Fizz');
      continue;
    }
    if (i % 5 === 0) {
      array.push('Buzz');
      continue;
    }
    array.push(i.toString());
  }
  return array;
}`;

export const palindromeString = `palindrome(stringOrInteger) {
  const reversed = stringOrInteger.toString().split('').reverse().join('');
  if (x == reversed) return true;
  return false;
}`;
