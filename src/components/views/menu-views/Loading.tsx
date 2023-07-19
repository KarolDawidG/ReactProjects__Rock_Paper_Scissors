import React, { useEffect, useState } from 'react';
import '../../css/CountdownAnimation.css';
import { ClockLoader } from 'react-spinners';


export const Loading = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return <>
        <p className='second-player-time'>Czas na decyzje!</p>
        <div className='clock-loader'>
            <ClockLoader
                color="red"
                size={108}
                speedMultiplier={1.7}
            />
        </div>
        <br/>
        <div className="countdown-animation">Pozostało Ci {count} s.</div>
  </>
};

