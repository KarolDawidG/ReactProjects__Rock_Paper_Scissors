import React from 'react';
import '../../css/game-views.css'
import { WhatToDisplay } from './WhatToDisplay';
import { Points } from '../../utils/other/Points';
import { PlayAgainLogic } from '../../logic/SingleLogic/handlePlayAgainLogic';
import {Win} from "./Win";
import {DisplayProps} from '../../utils/interfaces/DisplayProps';

export const DisplayResult: React.FC<DisplayProps> = ({setWynik, setOpcjaNumber, setR, punkty, punktyPC, opcjaNumber, R, result, img}) => {
  const handlePlayAgain = () => PlayAgainLogic(setWynik, setOpcjaNumber, setR, punkty, punktyPC);

    const renderMatch = (e: number, f:number) =>{
        if (e > 2) {
            return <Win whoWin={'CZŁOWIEK'} regards={'Gratulacje!!!'} punkty={punkty} punktyPC={punktyPC}/>
        } else if (f > 2){
            return <Win whoWin={'PC'} regards={'Przykro nam!!!'} punkty={punkty} punktyPC={punktyPC}/>
        }else{
            return (
                <>
                    <WhatToDisplay
                        punkty={punkty}
                        punktyPC={punktyPC}
                        opcjaNumber={opcjaNumber}
                        R={R}
                        setWynik={setWynik}
                        setOpcjaNumber={setOpcjaNumber}
                        setR={setR}
                    />
                    <div id="przegrana">
                        <p className="result__wygrana">{result}</p>
                        <img src={`img/${img}.jpg`} alt="Obrazek" className="game__girl-image" onClick={handlePlayAgain}/>
                    </div>
                    <Points punkty={punkty} punktyPC={punktyPC}/>
                </>
            );
        }
    }

return <>
    {renderMatch(punkty, punktyPC)}
</>
};