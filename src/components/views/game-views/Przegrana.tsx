import React from 'react';
import '../../css/game-views.css'
import { CoWyswietlic } from './CoWyswietlic';

interface PrzegranaTemplateProps {
  punkty: number;
  punktyPC: number;
  opcjaNumber: number | null;
  R: number | null;
}

export const PrzegranaTemplate: React.FC<PrzegranaTemplateProps> = ({ punkty, punktyPC, opcjaNumber, R }) => {
  return (
    <>
    <CoWyswietlic opcjaNumber={opcjaNumber} R={R}/>
      <div id="przegrana">

<div className='center-side'>
    <p className="result__przegrana">Przegrana</p>
    <img src="img/sg.png" alt="Obrazek" className="game__girl-image" />
</div>  
  
<div className='right-side'>
  <p className="result__points">
      Punkty: <span id="punkty">{punkty}</span>
    </p>
    <p className="result__points">
      Punkty komputera: <span id="punktyPC">{punktyPC}</span>
    </p>
</div>

</div>
    </>
    
  );
};