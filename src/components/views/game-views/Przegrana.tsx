import React from 'react';
import '../../css/game-views.css'
import { CoWyswietlic } from './CoWyswietlic';
import { Punkty } from './Punkty';

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
        <p className="result__przegrana">Przegrana</p>
        <img src="img/sadGrey.jpg" alt="Obrazek" className="game__girl-image" />
        <Punkty punkty={punkty} punktyPC={punktyPC}/>
    </div>
    </>
    
  );
};