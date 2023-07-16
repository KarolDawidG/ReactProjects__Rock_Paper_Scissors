import React from 'react';
import '../../css/game-views.css'
import { CoWyswietlic } from './CoWyswietlic';
import { Punkty } from './Punkty';

interface RemisTemplateProps {
  punkty: number;
  punktyPC: number;
  opcjaNumber: number | null;
  R: number | null;
}

export const RemisTemplate: React.FC<RemisTemplateProps> = ({ punkty, punktyPC, opcjaNumber, R }) => {
  return (
<>
<CoWyswietlic opcjaNumber={opcjaNumber} R={R}/>
    <div id="remis">
      <p className="result__remis">=== R E M I S ===</p>
      <img src="img/disGrey.jpg" alt="Obrazek" className="game__girl-image" />
      <Punkty punkty={punkty} punktyPC={punktyPC}/>
    </div>
</>
  );
};