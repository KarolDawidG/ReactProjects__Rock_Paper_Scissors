import React from 'react';
import '../../css/game-views.css'
import { CoWyswietlic } from './CoWyswietlic';
import { Punkty } from './Punkty';

interface WygranaTemplateProps {
  punkty: number;
  punktyPC: number;
  opcjaNumber: number | null;
  R: number | null;
}

export const WygranaTemplate: React.FC<WygranaTemplateProps> = ({ punkty, punktyPC, opcjaNumber, R }) => {
  return (
  <>
      <CoWyswietlic opcjaNumber={opcjaNumber} R={R}/>
    <div id="wygrana">
      <p className="result__wygrana">WYGRAŁEŚ !!!</p>
      <img src="img/happyGrey.jpg" alt="Obrazek" className="game__girl-image" />
      <Punkty punkty={punkty} punktyPC={punktyPC}/>
    </div>

  </>
  );
};