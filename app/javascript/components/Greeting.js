/*eslint disabled*/
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getGreeting} from '../redux/greetings/greetings'

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!greeting.length) dispatch(getGreeting());
  }, []);

  return(
    <div>
      <div className='greeting'>
        <h1>Hello Word</h1>
        <p>
        {greeting.length ? greeting: 'Loading a greeting from around the world...'}
        </p>
      </div>
    </div>
  );
}

export default Greeting