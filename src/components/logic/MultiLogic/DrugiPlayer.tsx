import React, { useState, useEffect } from 'react';
import { RedirectBtn } from '../../utils/buttons/RedirectBtn';
import { useParams } from 'react-router-dom';
import { SecondWin } from '../../views/multi-views/SecondWin';
import { RemisMulti } from '../../views/multi-views/RemisMulti';
import { FirstWin } from '../../views/multi-views/FirstWin';
import { Wybor } from './Wybor';

interface DrugiPlayerProps {
  graczOne?: number;
  graczSecond?: number;
}

export const DrugiPlayer: React.FC<DrugiPlayerProps> = () => {
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
            return <RemisMulti pktG1={pktG1} pktG2={pktG2}/>;
      } else if (Number(graczOne) < Number(graczSecond)) {
            return <FirstWin pktG1={pktG1} pktG2={pktG2} />;
      } else {
            return <SecondWin pktG1={pktG1} pktG2={pktG2}/>;
      }
    } else {
      return (
        <>
          <p className="game__option-label">Drugi gracz</p>
          <Wybor handleButtonClick={handleButtonClick} />
        </>
      );
    }
  };

  return (
    <>
      <RedirectBtn to="/">Strona Główna</RedirectBtn>
      <div id="index" className="game__container">
        {renderView()}
      </div>
    </>
  );
};