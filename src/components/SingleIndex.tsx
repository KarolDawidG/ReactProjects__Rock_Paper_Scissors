import React from 'react';
import './css/style.css';
import { IndexTemplateProps } from './utils/interface/IndexTemplateProps';

export const IndexTemplate: React.FC<IndexTemplateProps> = ({ handleGra, punkty, punktyPC, handleKasuj }) => {
  return (
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
        <p className="game__points">
          Punkty: <span id="punkty">{punkty}</span>
        </p>
        <p className="game__points">
          Punkty komputera: <span id="punktyPC">{punktyPC}</span>
        </p>
      </div>
      <div className="game__reset">
        <button onClick={handleKasuj} className="game__reset-button">
          Reset
        </button>
      </div>
    </div>
  );
};