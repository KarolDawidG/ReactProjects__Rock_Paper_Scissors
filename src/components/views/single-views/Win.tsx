import React from 'react';
import '../../css/game-views.css'

interface WinProps {
    whoWin: string;
    regards: string;
}

export const Win: React.FC<WinProps> = ({whoWin, regards}) => {
  return (
    <>
     <h1> Zwyciezca jest... {whoWin} </h1>
        <h2>{regards}</h2>
    </>
    
  );
};