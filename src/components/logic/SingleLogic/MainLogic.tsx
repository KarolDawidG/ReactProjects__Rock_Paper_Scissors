import { useState } from 'react';
import { SingleChoice } from './SingleChoice';
import { DisplayResult } from '../../views/single-views/DisplayResult';
import {Algorithm} from './Algorithm';
const choicesHistory: number[] = [];

export const MainLogic = () => {
  const [punkty, setPunkty] = useState<number>(0);
  const [punktyPC, setPunktyPC] = useState<number>(0);
  const [wynik, setWynik] = useState<string>('');
  const [opcjaNumber, setOpcjaNumber] = useState<null | number>(null);
  const [R, setR] = useState<null | number>(null);
  

  const handleGra = (opcja: number) => {
    const opcjaNumber = parseInt(opcja.toString());
  

    choicesHistory.push(Number(opcjaNumber));
    const estimatedNextChoice = Algorithm(choicesHistory);

    console.log(choicesHistory);
    console.log("Oszacowany kolejny wybór komputera:", estimatedNextChoice);


  //const R = Math.floor(Math.random() * 3) + 1;      // Algorytm nr 1    poziom łatwy
  const R = estimatedNextChoice;                  // Algorytm nr 2    poziom sredni


    if (opcjaNumber === R) {
      setWynik('remis');
      remis(opcjaNumber, R);
    } else if (
      (opcjaNumber === 1 && R === 2) ||
      (opcjaNumber === 2 && R === 3) ||
      (opcjaNumber === 3 && R === 1)
    ) {
      setWynik('przegrana');
      przegrana(opcjaNumber, R);
    } else {
      setWynik('wygrana');
      wygrana(opcjaNumber, R);
    }
  };

  const wygrana = (opcjaNumber: any, R: any) => {
    setPunkty((punkty) => punkty + 1);
    setOpcjaNumber(opcjaNumber);
    setR(R);
  };

  const przegrana = (opcjaNumber: any, R: any) => {
    setPunktyPC((punktyPC) => punktyPC + 1);
    setOpcjaNumber(opcjaNumber);
    setR(R);
  };

  const remis = (opcjaNumber: any, R: any) => {
    setOpcjaNumber(opcjaNumber);
    setR(R);
  };


  const handleKasuj = () => {
    setPunktyPC(0);
    setPunkty(0);
    setWynik('');
    setOpcjaNumber(null);
    setR(null);
    choicesHistory.length = 0;      // zerowanie historii
  };





  return (
    <main className="main">

      {wynik === '' && (
        <SingleChoice handleGra={handleGra} punkty={punkty} punktyPC={punktyPC} handleKasuj={handleKasuj} />
      )}
      {wynik === 'przegrana' && <DisplayResult
                result={'Przegrałeś'}
                img={'sadGrey'}
                punkty={punkty}
                punktyPC={punktyPC}
                opcjaNumber={opcjaNumber}
                R={R}
                setWynik={setWynik}
                setOpcjaNumber={setOpcjaNumber}
                setR={setR}
                  />}
      {wynik === 'remis' && <DisplayResult 
                result={'Remis'}
                img={'disGrey'}
                punkty={punkty}
                punktyPC={punktyPC}
                opcjaNumber={opcjaNumber}
                R={R}
                setWynik={setWynik}
                setOpcjaNumber={setOpcjaNumber}
                setR={setR}
                  />}
      {wynik === 'wygrana' && <DisplayResult
                result={'Wygrałeś'}
                img={'happyGrey'} 
                punkty={punkty}
                punktyPC={punktyPC}
                opcjaNumber={opcjaNumber}
                R={R}
                setWynik={setWynik}
                setOpcjaNumber={setOpcjaNumber}
                setR={setR}
                  />}
    </main>
  );
};
