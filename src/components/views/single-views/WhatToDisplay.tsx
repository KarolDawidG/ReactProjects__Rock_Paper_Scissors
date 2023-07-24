import React from 'react';
import '../../css/game-views.css'
import { HandlePlayAgainLogic } from '../../logic/SingleLogic/HandlePlayAgainLogic';
import {WhatToDisplayProps} from '../../utils/interfaces/WhatToDisplayProps';


export const WhatToDisplay: React.FC<WhatToDisplayProps> = ({ setWynik, setOpcjaNumber, setR,  punkty, punktyPC, opcjaNumber, R}) => {
  const whatToDisplay = (opcja: any) => {
    if (opcja === 1) {
      return {
        nazwa: 'Papier',
        obrazek: 'sheet.png'
      };
    } else if (opcja === 2) {
      return {
        nazwa: 'Nożyce',
        obrazek: 's.png'
      };
    } else if (opcja === 3) {
      return {
        nazwa: 'Kamień',
        obrazek: 'stone.png'
      };
    }
  };

  const wyborGracza = whatToDisplay(opcjaNumber);
  const wyborKomputera = whatToDisplay(R);
  const handlePlayAgain = () => HandlePlayAgainLogic(setWynik, setOpcjaNumber, setR, punkty, punktyPC);

  return (
    <>
      <div id="wygrana"onClick={handlePlayAgain}>
        <p className='text'>
          Wybrałeś {wyborGracza?.nazwa} zaś przeciwnik wybrał {wyborKomputera?.nazwa}!!
        </p>
          <div className='versus'>
              <img src={`/img/${wyborGracza?.obrazek}`} alt={wyborGracza?.nazwa} className="game__button-image-left" />
                  <span className="result__vs">VS</span>
              <img src={`/img/${wyborKomputera?.obrazek}`} alt={wyborKomputera?.nazwa} className="game__button-image-right" />
          </div>
      </div>
    </>
  );
  
};