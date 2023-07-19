import React from 'react';
import '../../css/style.css';
import { Punkty } from '../../utils/other/Punkty';

interface SingleWyborProps {
  handleGra: (opcja: number) => void;
  punkty: number;
  punktyPC: number;
  handleKasuj: () => void;
}

export const SingleWybor: React.FC<SingleWyborProps> = ({ handleGra, punkty, punktyPC, handleKasuj }) => {
  return (
    <>
        <div id="index" className="game__container">
          <p className="game__option-label">Wybierz opcję:</p>
          <ul className="game__options">
            <li>
              <button onClick={() => handleGra(1)}>
                <img src="img/sheet.png" alt="Papier" className="game__button-image" />
              </button>
            </li>
            <li>
              <button onClick={() => handleGra(2)}>
                <img src="img/s.png" alt="Nożyce" className="game__button-image" />
              </button>
            </li>
            <li>
              <button onClick={() => handleGra(3)}>
                <img src="img/stone.png" alt="Kamień" className="game__button-image" />
              </button>
            </li>
          </ul>
          <div className="game__score">
            <Punkty punkty={punkty} punktyPC={punktyPC}/>
          </div>
          <div className="game__reset">
            <button onClick={handleKasuj} className="game__reset-button">
              Reset
            </button>
          </div>
        </div>

    </>
  );
};