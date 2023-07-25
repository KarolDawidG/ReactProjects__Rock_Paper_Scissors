import React from 'react';
import '../../css/style.css';
import { Points } from '../../utils/other/Points';
import {SingleChoiceProps} from '../../utils/interfaces/SingleChoiceProps';

export const SingleChoice: React.FC<SingleChoiceProps> = ({ handleGra, punkty, punktyPC, handleKasuj }) => {
  return (
    <>
        <div id="index" className="game__container">
          <p className="game__option-label">Choose an option:</p>
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
          <div className='top-right'>
                  <Points punkty={punkty} punktyPC={punktyPC}/>
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