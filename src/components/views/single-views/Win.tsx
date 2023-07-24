import React from 'react';
import '../../css/game-views.css'
import {WinProps} from '../../utils/interfaces/WinProps';

export const Win: React.FC<WinProps> = ({whoWin, regards}) => {
  return (
    <>
     <h1> Zwyciezca jest... {whoWin} </h1>
        <h2>{regards}</h2>
    </>
    
  );
};