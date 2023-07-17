import { MainPageButton } from '../../utils/buttons/MainPageButton';
import '../../css/style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wybor } from '../../logic/MultiLogic/Wybor';

export const MultiPlayer = () => {
  const [graczOne, setGraczOne] = useState(0);
  const navigate = useNavigate();

  const handleButtonClick = (value: number) => {
    setGraczOne(value);
    navigate(`/player1/${value}`);
  };

  console.log(graczOne);
  return (
    <>
      <MainPageButton/>
      <div id="index" className="game__container">
          <p className="game__option-label">Pierwszy gracz</p>
              <Wybor handleButtonClick={handleButtonClick} />
        </div>
    </>
  );
};