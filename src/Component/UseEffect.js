import React, { useEffect, useState } from 'react';

function Lifecycl() {
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState('');

    useEffect(() => {
        // Code to run on component mount and when count or status changes
        console.log('Component updated');
        // Perform some logic based on the count state
        if (count % 2 === 0) {
          setStatus('Even');
        } else {
          setStatus('Odd');
        }
        // Cleanup function for this effect
        // return () => {
        //   console.log('Component update cleanup');
        // };
        
      }, [count]);
    
      const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
      };

      const reset = () => {
        setCount(0);
        setStatus('');
        console.log('Component update cleanup');
      };
    
  return (
    <div>
         <p>Count: {count}</p>
          <p>Status: {status}</p>
          <button onClick={incrementCount}>Increment</button>
          <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Lifecycl;
