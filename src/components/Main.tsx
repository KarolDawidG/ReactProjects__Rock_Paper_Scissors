import React, { useState, useEffect } from 'react';
import '../style.css';
import { IndexTemplate } from './Index';
import { PrzegranaTemplate } from './views/game-views/Przegrana';
import { RemisTemplate } from './views/game-views/Remis';
import { WygranaTemplate } from './views/game-views/Wygrana';
import { init } from './logic/init';
import { render } from './logic/render';

export const Main = () => {
  const [punkty, setPunkty] = useState(0);
  const [punktyPC, setPunktyPC] = useState(0);
  const [wynik, setWynik] = useState('');

  const handleGra = (opcja: number) => {
    const opcjaNumber = parseInt(opcja.toString());
    const R = losowanie();

    if (opcjaNumber === R) {
      setWynik('remis');
      remis();
    } else if (
      (opcjaNumber === 1 && R === 2) ||
      (opcjaNumber === 2 && R === 3) ||
      (opcjaNumber === 3 && R === 1)
    ) {
      setWynik('wygrana');
      wygrana();
    } else {
      setWynik('przegrana');
      przegrana();
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

  const wygrana = () => {
    setPunkty((prevPunkty) => prevPunkty + 1);
    render('wygrana', { punkty, punktyPC });
  };

  const przegrana = () => {
    setPunktyPC((prevPunktyPC) => prevPunktyPC + 1);
    render('przegrana', { punkty, punktyPC });
  };

  const remis = () => {
    render('remis', { punkty, punktyPC });
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
    init();
  };

  const handlePlayAgain = () => {
    setWynik('');
    render('index', { punkty, punktyPC });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <main className="main">
      
      {wynik === '' && (
        <IndexTemplate handleGra={handleGra} punkty={punkty} punktyPC={punktyPC} handleKasuj={handleKasuj} />
      )}
      {wynik === 'przegrana' && <PrzegranaTemplate punkty={punkty} punktyPC={punktyPC} />}
      {wynik === 'remis' && <RemisTemplate punkty={punkty} punktyPC={punktyPC} />}
      {wynik === 'wygrana' && <WygranaTemplate punkty={punkty} punktyPC={punktyPC} />}
      {wynik !== '' && (
        <p className="result__play-again">
          Naciśnij{' '}
          <button className="result__play-again-button" onClick={handlePlayAgain}>
            Tutaj
          </button>
          , aby zagrać jeszcze raz!
        </p>
      )}
    </main>
  );
};

