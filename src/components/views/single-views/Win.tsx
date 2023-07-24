import React from 'react';
import '../../css/win.css';
import { WinProps } from '../../utils/interfaces/WinProps';
import { Points } from '../../utils/other/Points';
import { RedirectBtn } from '../../utils/buttons/RedirectBtn';

export const Win: React.FC<WinProps> = ({ whoWin, regards, punkty, punktyPC}) => {
  
  return (
    <div className={`win-main ${whoWin === 'PC' ? 'pc-win' : 'player-win'}`}>
      <RedirectBtn to="/single">Zagraj jeszcze raz</RedirectBtn>
      <h1 className='win_main-title'>Zwycięzca jest... {whoWin}</h1>
      <h2 className='win_title'>{regards}</h2>
      <Points punkty={punkty} punktyPC={punktyPC}/>
    </div>
  );
};
