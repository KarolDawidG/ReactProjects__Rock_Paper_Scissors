import React from 'react';
import '../../css/game-views.css'
import { CoWyswietlic } from './CoWyswietlic';

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
      <img src="img/smg.png" alt="Obrazek" className="game__girl-image" />
     
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