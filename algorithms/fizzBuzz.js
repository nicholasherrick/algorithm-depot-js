export default function fizzBuzz(n) {
  let a = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      a.push('FizzBuzz');
      continue;
    }
    if (i % 3 === 0) {
      a.push('Fizz');
      continue;
    }
    if (i % 5 === 0) {
      a.push('Buzz');
      continue;
    }
    a.push(i.toString());
  }
  return a;
}
