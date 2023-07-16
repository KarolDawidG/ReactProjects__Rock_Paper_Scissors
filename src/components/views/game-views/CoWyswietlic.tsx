import React from 'react';
import '../../css/game-views.css'

interface CoWyswietlic {
  opcjaNumber: number | null;
  R: number | null;
}

export const CoWyswietlic: React.FC<CoWyswietlic> = ({  opcjaNumber, R}) => {
  const coWyswietlic = (opcja: any) => {
    if (opcja === 1) {
      return {
        nazwa: 'Papier',
        obrazek: 'sheet.png'
      };
    } else if (opcja === 2) {
      return {
        nazwa: 'Nożyce',
        obrazek: 's.png'
      };
    } else if (opcja === 3) {
      return {
        nazwa: 'Kamień',
        obrazek: 'stone.png'
      };
    }
  };

  const wyborGracza = coWyswietlic(opcjaNumber);
  const wyborKomputera = coWyswietlic(R);
  return (
    <>
      <div id="wygrana">
        <p>Wybrałeś {wyborGracza?.nazwa}zaś przeciwnik wybrał {wyborKomputera?.nazwa}!!</p>
    </div>
    </>
  );
};