import React from 'react';
import { init } from '../../logic/init';
import '../../../style.css';

interface WygranaTemplateProps {
  punkty: number;
  punktyPC: number;
}

export const WygranaTemplate: React.FC<WygranaTemplateProps> = ({ punkty, punktyPC }) => {
  const handlePlayAgain = () => {
    init(punkty, punktyPC);
  };

  return (
    <div id="wygrana">
      <p className="result__wygrana">WYGRAŁEŚ !!!</p>
      <img src="img/smg.png" alt="Obrazek" className="game__girl-image" />
      <p className="result__choice">
        Twój wybór: <span id="wyborGracza"></span>
      </p>
      <p className="result__choice">
        Wybór komputera: <span id="wyborKomputera"></span>
      </p>
     
      <p className="result__points">
        Punkty: <span id="punkty">{punkty}</span>
      </p>
      <p className="result__points">
        Punkty komputera: <span id="punktyPC">{punktyPC}</span>
      </p>
    </div>
  );
};
