import React from 'react';
import '../../css/game-views.css'
import { CoWyswietlic } from './CoWyswietlic';
import { Punkty } from './Punkty';
import { handlePlayAgainLogic } from '../../logic/handlePlayAgainLogic';
import {GameInterfaceProps} from '../../utils/interface/GameInterfaceProps';

export const PrzegranaTemplate: React.FC<GameInterfaceProps> = ({setWynik, setOpcjaNumber, setR, render, punkty, punktyPC, opcjaNumber, R }) => {
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
        <div id="przegrana">
            <p className="result__przegrana">Przegrana</p>
            <img src="img/sadGrey.jpg" alt="Obrazek" className="game__girl-image" onClick={handlePlayAgain}/>
        </div>
      <Punkty punkty={punkty} punktyPC={punktyPC}/>
    </>
    
  );
};