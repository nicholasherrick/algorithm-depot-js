import Layout from '../components/Layout';
import palindrome from '../algorithms/palindrome';
import { palindromeString } from '../algorithms';
import { useState } from 'react';
import Highlight from 'react-highlight';

export default function Fizzbuzz() {
  const [string, setString] = useState(null);

  const handleChange = e => {
    setString(e.target.value);
  };
  return (
    <Layout title='Palindrome' header='Palindrome'>
      <div className='palindrome'>
        <h2>Description:</h2>
        <p>
          Given an any string or integer, return true if the input is a
          palindrome, or false if it is not
        </p>
        <h2>Solution:</h2>
        <Highlight className='javascript'>{`${palindromeString}`}</Highlight>
        <label htmlFor='number'>Enter text</label>
        <input type='text' onChange={handleChange} maxLength='14' />
        <h2>Result:</h2>
        <p>
          {string ? palindrome(string).toString().replace(/,/g, ', ') : null}
        </p>
      </div>
    </Layout>
  );
}
