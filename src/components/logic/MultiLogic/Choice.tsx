import React from 'react';

interface ChoiceProps {
  handleButtonClick: (value: number) => void;
}

export const Choice: React.FC<ChoiceProps> = ({ handleButtonClick }) => {
  return (
    <div className='game__options--main'>
      <ul className="game__options">
        <li>
          <button onClick={() => handleButtonClick(1)}>
            <img src="../img/sheet.png" alt="Papier" className="game__button-image" />
          </button>
        </li>
        <li>
          <button onClick={() => handleButtonClick(2)}>
            <img src="../img/s.png" alt="Nożyce" className="game__button-image" />
          </button>
        </li>
        <li>
          <button onClick={() => handleButtonClick(3)}>
            <img src="../img/stone.png" alt="Kamień" className="game__button-image" />
          </button>
        </li>
      </ul>
    </div>
  );
};
