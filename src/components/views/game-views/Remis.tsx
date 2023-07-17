import React from 'react';
import '../../css/game-views.css'
import { CoWyswietlic } from './CoWyswietlic';
import { Punkty } from '../../utils/other/Punkty';
import { handlePlayAgainLogic } from '../../logic/SingleLogic/handlePlayAgainLogic';
import { GameInterfaceProps } from '../../utils/interface/GameInterfaceProps';

export const RemisTemplate: React.FC<GameInterfaceProps> = ({ setWynik, setOpcjaNumber, setR, render, punkty, punktyPC, opcjaNumber, R }) => {

  const handlePlayAgain = () => handlePlayAgainLogic(setWynik, setOpcjaNumber, setR, render, punkty, punktyPC);
  
  return (
    <>
      <CoWyswietlic
        punkty={punkty}
        punktyPC={punktyPC}
        opcjaNumber={opcjaNumber}
        R={R}
        setWynik={setWynik}
        setOpcjaNumber={setOpcjaNumber}
        setR={setR}
        render={render}
      />
      <div>
        <p className="result__remis">=== R E M I S ===</p>
        <img src="img/disGrey.jpg" alt="Obrazek" className="game__girl-image" onClick={handlePlayAgain} />
      </div>
      <Punkty punkty={punkty} punktyPC={punktyPC} />
    </>
  );
};
