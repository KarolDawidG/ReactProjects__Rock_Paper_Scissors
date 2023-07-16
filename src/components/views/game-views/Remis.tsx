import React from 'react';
import '../../css/game-views.css'
import { CoWyswietlic } from './CoWyswietlic';

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
      <img src="img/fg.png" alt="Obrazek" className="game__girl-image" />

      <p className="result__points">
        Punkty: <span id="punkty">{punkty}</span>
      </p>
      <p className="result__points">
        Punkty komputera: <span id="punktyPC">{punktyPC}</span>
      </p>
    </div>
</>
  );
};