import React from 'react';
import '../../css/win.css';
import { WinProps } from '../../utils/interfaces/WinProps';
import { Points } from '../../utils/other/Points';
import { RefreshBtn } from '../../utils/buttons/RefreshBtn';

export const Win: React.FC<WinProps> = ({ whoWin, regards, punkty, punktyPC }) => {
  return (
    <div className={`win-main ${whoWin === 'ARTIFICIAL INTELLIGENCE' ? 'pc-win' : 'player-win'}`}>
      <div className="content-container">
          <h1 className="win_main-title">The winner is {whoWin}</h1>
            {whoWin === 'ARTIFICIAL INTELLIGENCE' && (
              <img src="img/animeGirl.gif" alt="Manga Girl" className="animatet-girl" />
            )}
          <h2 className="win_title">{regards}</h2>
            <div className='top-right'>
                  <Points punkty={punkty} punktyPC={punktyPC}/>
            </div>
              <RefreshBtn />
      </div>
    </div>
  );
};


