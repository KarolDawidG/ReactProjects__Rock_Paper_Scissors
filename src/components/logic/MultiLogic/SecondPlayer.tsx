import React, { useState, useEffect } from 'react';
import { RedirectBtn } from '../../utils/buttons/RedirectBtn';
import { useParams } from 'react-router-dom';
import { DisplayResultMulti } from '../../views/multi-views/DisplayResultMulti';
import { Choice } from './Choice';
import {SecondPlayerProps} from '../../utils/interfaces/SecondPlayerProps';

export const SecondPlayer: React.FC<SecondPlayerProps> = () => {
  const { graczOne } = useParams();
  const [graczSecond, setGraczSecond] = useState(0);

  const [pktG1, setpktG1] = useState(() => {
    const storedPktG1 = localStorage.getItem('pktG1');
    return storedPktG1 ? Number(storedPktG1) : 0;
  });
  
  const [pktG2, setpktG2] = useState(() => {
    const storedPktG2 = localStorage.getItem('pktG2');
    return storedPktG2 ? Number(storedPktG2) : 0;
  });

  useEffect(() => {
    if (graczOne && graczOne !== '' && graczSecond !== 0) {
      if (Number(graczOne) === Number(graczSecond)) {
      } else if (Number(graczOne) < Number(graczSecond)) {
        setpktG1(prev => prev + 1);
      } else {
        setpktG2(prev => prev + 1);
      }
    }
  }, [graczOne, graczSecond]);

  useEffect(() => {
    // Zapisz wartości punktów do localStorage po każdej zmianie
    localStorage.setItem('pktG1', pktG1.toString());
    localStorage.setItem('pktG2', pktG2.toString());
  }, [pktG1, pktG2]);

  const handleButtonClick = (value: number) => {
    setGraczSecond(value);
  };

  const renderView = () => {
    if (graczOne && graczOne !== '' && graczSecond !== 0) {
      if (Number(graczOne) === Number(graczSecond)) {
          return <DisplayResultMulti 
                pktG1={pktG1} 
                pktG2={pktG2} 
                sentence={'Nobody won!'} 
                result={'Draw'} 
                img1={'disBlack'}
                img2={'disGrey'}
            />;
      } else if (Number(graczOne) < Number(graczSecond)) {
            return <DisplayResultMulti 
                pktG1={pktG1} 
                pktG2={pktG2} 
                sentence={'Congratulations!'} 
                result={'Gray wins!'} 
                img1={'sadBlack'}
                img2={'happyGrey'}
          />;
      } else {
            return <DisplayResultMulti 
                pktG1={pktG1} 
                pktG2={pktG2} 
                sentence={'Congratulations to the winner!'} 
                result={'Black won decisively!'} 
                img1={'happyBlack'}
                img2={'sadGrey'}
          />;
      }
    } else {
      return (
        <>
          <p className="game__option-label">Second player</p>
          <Choice handleButtonClick={handleButtonClick} />
        </>
      );
    }
  };

  return (
    <>
      <RedirectBtn to="/">Home</RedirectBtn>
      <div id="index" className="game__container">
        {renderView()}
      </div>
    </>
  );
};
