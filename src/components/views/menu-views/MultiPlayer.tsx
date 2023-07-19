import { RedirectBtn } from '../../utils/buttons/RedirectBtn';
import '../../css/style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wybor } from '../../logic/MultiLogic/Wybor';
import { PointsDisplay } from '../../logic/MultiLogic/PointsDisplay';
import { Loading } from './Loading';

export const MultiPlayer = () => {
  const [graczOne, setGraczOne] = useState(0);
  const [showNewView, setShowNewView] = useState(false); // Dodany stan showNewView
  const navigate = useNavigate();

  const handleButtonClick = (value: number) => {
    setGraczOne(value);
    setShowNewView(true); // Ustawienie showNewView na true

    setTimeout(() => {
      navigate(`/player1/${value}`);
    }, 5000); // Po 3 sekundach przejście do nowego widoku
  };

  console.log(graczOne);
  return (
    <>
      <RedirectBtn to="/">Strona Główna</RedirectBtn>
      <div id="index" className="game__container">
        
        {showNewView ? (
          <Loading/>
        ) : (
          <>
          <p className="game__option-label">Pierwszy gracz</p>
            <Wybor handleButtonClick={handleButtonClick} />
            <PointsDisplay />
          </>
        )}
      </div>
    </>
  );
};
