import React from 'react';
import '../../css/game-views.css'
import {PointsTemplateProps} from '../../utils/interfaces/PointsTemplateProps';


export const Points: React.FC<PointsTemplateProps> = ({  punkty, punktyPC}) => {
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