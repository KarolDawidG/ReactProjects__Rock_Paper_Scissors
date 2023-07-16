import React from 'react';
import '../../css/game-views.css'

interface PunktyTemplateProps {
  punkty: number;
  punktyPC: number;
}

export const Punkty: React.FC<PunktyTemplateProps> = ({  punkty, punktyPC}) => {
  return (
    <>
    <div id="wygrana">
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