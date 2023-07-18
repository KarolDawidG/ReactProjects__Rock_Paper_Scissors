import React, { useEffect, useState } from 'react';
import '../../css/button.css';

export const PointsDisplay: React.FC = () => {
  const [pktG1, setPktG1] = useState<number | null>(null);
  const [pktG2, setPktG2] = useState<number | null>(null);

  useEffect(() => {
    const storedPktG1 = localStorage.getItem('pktG1');
    const storedPktG2 = localStorage.getItem('pktG2');

    if (storedPktG1 && storedPktG2) {
      setPktG1(Number(storedPktG1));
      setPktG2(Number(storedPktG2));
    }
  }, []);

  if (pktG1 === null || pktG2 === null) {
    return (
      <div className="button-menu__options">
      <p className="text__main blink-red">Rogrywka wkrotce sie rozpocznie...</p>
    </div>
    ) // Wyświetlanie ładowania lub innej treści, jeśli punkty nie zostały jeszcze pobrane
  }

  return (
    <div className="button-menu__options">
      <p>Punkty 1: {pktG1} vs Punkty 2: {pktG2}</p>
    </div>
  );
};
