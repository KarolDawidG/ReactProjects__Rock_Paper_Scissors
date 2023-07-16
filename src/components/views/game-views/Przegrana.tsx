import React from 'react';
import '../../css/game-views.css'

interface PrzegranaTemplateProps {
  punkty: number;
  punktyPC: number;
}

export const PrzegranaTemplate: React.FC<PrzegranaTemplateProps> = ({ punkty, punktyPC }) => {
  return (

    <div id="przegrana">

          <div className='center-side'>
              <p className="result__przegrana">Przegrana</p>
              <img src="img/sg.png" alt="Obrazek" className="game__girl-image" />
          </div>

            <div className='left-side'>
              <p className="result__choice">
                Twój wybór: <span id="wyborGracza"></span>
              </p>
              <p className="result__choice">
                Wybór komputera: <span id="wyborKomputera"></span>
              </p>
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
  );
};
