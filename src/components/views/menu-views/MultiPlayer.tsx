import { RedirectBtn } from '../../utils/buttons/RedirectBtn';
import '../../css/style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wybor } from '../../logic/MultiLogic/Wybor';
import { ResetPointsBtn } from '../../utils/buttons/ResetPointsBtn';
import { PointsDisplay } from '../../logic/MultiLogic/PointsDisplay';

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
      <RedirectBtn to="/">Strona Główna</RedirectBtn>
        <div id="index" className="game__container">
          <p className="game__option-label">Pierwszy gracz</p>
              <Wybor handleButtonClick={handleButtonClick} />
              <PointsDisplay/>
        </div>
      <ResetPointsBtn/>
      
    </>
  );
};