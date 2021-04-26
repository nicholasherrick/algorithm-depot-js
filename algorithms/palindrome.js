export default function palindrome(stringOrInteger) {
  const reversed = stringOrInteger.toString().split('').reverse().join('');
  if (stringOrInteger == reversed) return true;
  return false;
}
