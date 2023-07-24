import { RedirectBtn } from '../../utils/buttons/RedirectBtn';
import '../../css/style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Choice } from '../../logic/MultiLogic/Choice';
import { PointsDisplay } from '../../logic/MultiLogic/PointsDisplay';
import { Loading } from '../../logic/MultiLogic/Loading';

export const MultiPlayer = () => {
  const [graczOne, setGraczOne] = useState<number>(0);
  console.log(graczOne);
  const [showNewView, setShowNewView] = useState(false); // widok ukryty, dopóki false
  const przekieruj = useNavigate();

  const handleButtonClick = (value: number) => {
    setGraczOne(value);
    setShowNewView(true); // Ustawienie showNewView na true po klikniecu button

    setTimeout(() => {
      przekieruj(`/player1/${value}`);  //przekierowanie na /player1 (...)
    }, 5000); // po 5 sekundach 
  };

  return (
    <>
      <RedirectBtn to="/">Strona Główna</RedirectBtn>
      <div id="index" className="game__container">
        {showNewView ? (
          <Loading/>
        ) : (
          <>
          <p className="game__option-label">Pierwszy gracz</p>
            <Choice handleButtonClick={handleButtonClick} />
            <PointsDisplay />
          </>
        )}
      </div>
    </>
  );
};
