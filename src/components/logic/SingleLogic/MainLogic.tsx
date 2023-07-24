import { useState } from 'react';
import '../../css/win.css';
import { SingleChoice } from './SingleChoice';
import { DisplayResult } from '../../views/single-views/DisplayResult';
import { Algorithm } from './Algorithm';
import { LevelBtn } from '../../utils/buttons/LevelBtn';

const choicesHistory: number[] = [];

export const MainLogic = () => {
  const [punkty, setPunkty] = useState<number>(0);
  const [punktyPC, setPunktyPC] = useState<number>(0);
  const [wynik, setWynik] = useState<string>('');
  const [opcjaNumber, setOpcjaNumber] = useState<null | number>(null);
  const [R, setR] = useState<null | number>(null);
  const [level, setLevel] = useState<string>('hard'); // Dodajemy stan do śledzenia poziomu algorytmu - zaczynamy od ciezkiego poziomu

  const handleGra = (opcja: number) => {
    const opcjaNumber = parseInt(opcja.toString());
    choicesHistory.push(Number(opcjaNumber));

    const hardAlgorithm = Algorithm(choicesHistory);
    const easyAlgorithm = () => Math.floor(Math.random() * 3) + 1;

    const selectedAlgorithm = level === 'hard' ? hardAlgorithm  : easyAlgorithm(); // Wybieramy odpowiedni algorytm na podstawie poziomu

    if (opcjaNumber === selectedAlgorithm) {
      setWynik('remis');
      remis(opcjaNumber, selectedAlgorithm);
    } else if (
      (opcjaNumber === 1 && selectedAlgorithm === 2) ||
      (opcjaNumber === 2 && selectedAlgorithm === 3) ||
      (opcjaNumber === 3 && selectedAlgorithm === 1)
    ) {
      setWynik('przegrana');
      przegrana(opcjaNumber, selectedAlgorithm);
    } else {
      setWynik('wygrana');
      wygrana(opcjaNumber, selectedAlgorithm);
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

  const handleLevelChange = () => {
    setLevel(level === 'hard' ? 'easy' : 'hard'); // Przełączamy poziom między 'easy' i 'hard' po kliknięciu przycisku
  };

  return (
    <main className="main">
      <LevelBtn level={level} handleLevelChange={handleLevelChange}/>
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
