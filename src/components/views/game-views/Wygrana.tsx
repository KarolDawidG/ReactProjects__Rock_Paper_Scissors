import React from 'react';
import '../../css/game-views.css'
import { CoWyswietlic } from './CoWyswietlic';
import { Punkty } from './Punkty';
import { handlePlayAgainLogic } from '../../handlePlayAgainLogic';
import {GameInterfaceProps} from './GameInterfaceProps';

export const WygranaTemplate: React.FC<GameInterfaceProps> = ({setWynik, setOpcjaNumber, setR, render, punkty, punktyPC, opcjaNumber, R }) => {
  const handlePlayAgain = () => {
    handlePlayAgainLogic(setWynik, setOpcjaNumber, setR, render, punkty, punktyPC);
  };

  return (
  <>
    <CoWyswietlic opcjaNumber={opcjaNumber} R={R}/>
      <div id="wygrana">
        <p className="result__wygrana">WYGRAŁEŚ !!!</p>
        <img src="img/happyGrey.jpg" alt="Obrazek" className="game__girl-image" onClick={handlePlayAgain}/>
      </div>
    <Punkty punkty={punkty} punktyPC={punktyPC}/>
  </>
  );
};