import React from 'react';
import { MainPageButton } from '../../utils/buttons/MainPageButton';
import '../../css/style.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SecondWin } from '../../views/multi-views/SecondWin';
import { RemisMulti } from '../../views/multi-views/RemisMulti';
import { FirstWin } from '../../views/multi-views/FirstWin';
import { Wybor } from './Wybor';

interface DrugiPlayerProps {
  graczOne?: number;
  graczSecond?: number;
}

export const DrugiPlayer: React.FC<DrugiPlayerProps> = () => {
  const { graczOne } = useParams();
  const [graczSecond, setGraczSecond] = useState(0);

  const handleButtonClick = (value: number) => {
    setGraczSecond(value);
  };

  const renderView = () => {
    if (graczOne && graczOne !== '' && graczSecond !== 0) {
      if (Number(graczOne) === Number(graczSecond)) {
        return <RemisMulti />;
      } else if (Number(graczOne) < Number(graczSecond)) {
        return <FirstWin />;
      } else {
        return <SecondWin />;
      }
    } else {
      return <>
          <p className="game__option-label">Drugi gracz</p>
          <Wybor handleButtonClick={handleButtonClick} />
      </>
    }
  };

  return (
    <>
      <MainPageButton />
      <div id="index" className="game__container">
        {renderView()}
      </div>
    </>
  );
};
