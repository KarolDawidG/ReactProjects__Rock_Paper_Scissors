import React from 'react';
import '../../css/game-views.css'

interface RemisTemplateProps {
  punkty: number;
  punktyPC: number;
}

export const RemisTemplate: React.FC<RemisTemplateProps> = ({ punkty, punktyPC }) => {
  return (
    <div id="remis">
      <p className="result__remis">=== R E M I S ===</p>
      <img src="img/fg.png" alt="Obrazek" className="game__girl-image" />
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
