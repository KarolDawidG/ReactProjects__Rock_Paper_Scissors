import React from 'react';
import '../../css/game-views.css'
import { handlePlayAgainLogic } from '../../logic/handlePlayAgainLogic';
import {GameInterfaceProps} from '../../utils/interface/GameInterfaceProps';


export const CoWyswietlic: React.FC<GameInterfaceProps> = ({ setWynik, setOpcjaNumber, setR, render, punkty, punktyPC, opcjaNumber, R}) => {
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

  const handlePlayAgain = () => handlePlayAgainLogic(setWynik, setOpcjaNumber, setR, render, punkty, punktyPC);

  return (
    <>
      <div id="wygrana"onClick={handlePlayAgain}>
        <p>
          Wybrałeś {wyborGracza?.nazwa} zaś przeciwnik wybrał {wyborKomputera?.nazwa}!!
        </p>
  
        <img src={`/img/${wyborGracza?.obrazek}`} alt={wyborGracza?.nazwa} className="game__button-image" />
        <span className="result__vs">VS</span>
        <img src={`/img/${wyborKomputera?.obrazek}`} alt={wyborKomputera?.nazwa} className="game__button-image" />
      </div>
    </>
  );
  
};