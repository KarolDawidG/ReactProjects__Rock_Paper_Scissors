import { useState, useEffect } from 'react';
import '../../css/style.css';
import { IndexTemplate } from '../../SingleIndex';
import { PrzegranaTemplate } from '../../views/game-views/Przegrana';
import { RemisTemplate } from '../../views/game-views/Remis';
import { WygranaTemplate } from '../../views/game-views/Wygrana';
import { init } from './init';
import { render } from './render';

export const MainLogic = () => {
  const [punkty, setPunkty] = useState(0);
  const [punktyPC, setPunktyPC] = useState(0);
  const [wynik, setWynik] = useState('');
  const [opcjaNumber, setOpcjaNumber] = useState<null | number>(null);
  const [R, setR] = useState<null | number>(null);

  const handleGra = (opcja: number) => {
    const opcjaNumber = parseInt(opcja.toString());
    const R = losowanie();

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


    const wyborGraczaElement = document.getElementById('wyborGracza');
    const wyborKomputeraElement = document.getElementById('wyborKomputera');

    if (wyborGraczaElement) {
      wyborGraczaElement.textContent = mapOpcja(opcjaNumber);
    }

    if (wyborKomputeraElement) {
      wyborKomputeraElement.textContent = mapOpcja(R);
    }
  };

  const wygrana = (opcjaNumber: any, R: any) => {
    setPunkty((punkty) => punkty + 1);
    setOpcjaNumber(opcjaNumber);
    setR(R);
    render('wygrana', { punkty, opcjaNumber, R });
  };

  const przegrana = (opcjaNumber: any, R: any) => {
    setPunktyPC((punktyPC) => punktyPC + 1);
    setOpcjaNumber(opcjaNumber);
    setR(R);
    render('przegrana', {  punktyPC, opcjaNumber, R });
  };

  const remis = (opcjaNumber: any, R: any) => {
    setOpcjaNumber(opcjaNumber);
    setR(R);
    render('remis', { punkty, punktyPC, opcjaNumber, R });
  };

  const losowanie = () => {
    return Math.floor(Math.random() * 3) + 1;
  };

  const mapOpcja = (opcja: number) => {
    switch (opcja) {
      case 1:
        return 'Papier';
      case 2:
        return 'Nożyce';
      case 3:
        return 'Kamień';
      default:
        return '';
    }
  };

  const handleKasuj = () => {
    setPunktyPC(0);
    setPunkty(0);
    setWynik('');
    setOpcjaNumber(null);
    setR(null);
    init();
  };

 

  useEffect(() => {
    init();
  }, []);

  return (
    <main className="main">
      
      {wynik === '' && (
        <IndexTemplate handleGra={handleGra} punkty={punkty} punktyPC={punktyPC} handleKasuj={handleKasuj} />
      )}
      {wynik === 'przegrana' && <PrzegranaTemplate
                punkty={punkty}
                punktyPC={punktyPC}
                opcjaNumber={opcjaNumber}
                R={R}
                setWynik={setWynik}
                setOpcjaNumber={setOpcjaNumber}
                setR={setR}
                render={render}
                  />}
      {wynik === 'remis' && <RemisTemplate 
                punkty={punkty}
                punktyPC={punktyPC}
                opcjaNumber={opcjaNumber}
                R={R}
                setWynik={setWynik}
                setOpcjaNumber={setOpcjaNumber}
                setR={setR}
                render={render}
                  />}
      {wynik === 'wygrana' && <WygranaTemplate 
                punkty={punkty}
                punktyPC={punktyPC}
                opcjaNumber={opcjaNumber}
                R={R}
                setWynik={setWynik}
                setOpcjaNumber={setOpcjaNumber}
                setR={setR}
                render={render}
                  />}
    </main>
  );
};
