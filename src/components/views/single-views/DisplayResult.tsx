import React from 'react';
import '../../css/game-views.css'
import { WhatToDisplay } from './WhatToDisplay';
import { Punkty } from '../../utils/other/Punkty';
import { handlePlayAgainLogic } from '../../logic/SingleLogic/handlePlayAgainLogic';

interface DisplayProps {
  punkty: number;
  punktyPC: number;
  opcjaNumber: number | null;
  R: number | null;
  setWynik: any;
  setOpcjaNumber: any;
  setR: any;
  result: string;
  img: string;
}

export const DisplayResult: React.FC<DisplayProps> = ({setWynik, setOpcjaNumber, setR, punkty, punktyPC, opcjaNumber, R, result, img}) => {
  const handlePlayAgain = () => handlePlayAgainLogic(setWynik, setOpcjaNumber, setR, punkty, punktyPC);

  return (
    <>
      <WhatToDisplay
                      punkty={punkty}
                      punktyPC={punktyPC}
                      opcjaNumber={opcjaNumber}
                      R={R}
                      setWynik={setWynik}
                      setOpcjaNumber={setOpcjaNumber}
                      setR={setR}

      />
        <div id="przegrana">
            <p className="result__wygrana">{result}</p>
            <img src={`img/${img}.jpg`} alt="Obrazek" className="game__girl-image" onClick={handlePlayAgain}/>
        </div>
      <Punkty punkty={punkty} punktyPC={punktyPC}/>
    </>
    
  );
};