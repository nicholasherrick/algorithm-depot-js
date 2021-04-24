import Link from 'next/link';

export default function Navbar() {
  return (
    <ul className='navbar'>
      <li>
        <Link href='/'>Algorithm Depot</Link>
      </li>
      <li>
        <Link href='/fizzbuzz'>Fizz Buzz</Link>
      </li>
    </ul>
  );
}
