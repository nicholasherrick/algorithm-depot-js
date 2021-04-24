import Layout from '../components/Layout';
import fizzBuzz from '../algorithms/fizzBuzz';
import { useState, useEffect } from 'react';

export default function Fizzbuzz() {
  const [number, setNumber] = useState(null);

  const handleChange = e => {
    setNumber(e.target.value);
  };
  return (
    <Layout title='Fizz Buzz' header='Fizz Buzz'>
      <div className='fizzbuzz'>
        <label htmlFor='number'>Enter a number</label>
        <input type='text' onChange={handleChange} />
        <h2>Description:</h2>
        <p>
          Given an integer, return an array of numbers counting up to that
          integer, but for every number divisible by 3, print "Fizz", for every
          number divisble by 5, print "Buzz", and for every number divisble by
          both, print "FizzBuzz"
        </p>
        <h2>Result:</h2>
        <p>{fizzBuzz(number).toString().replace(/,/g, ', ')}</p>
      </div>
    </Layout>
  );
}
