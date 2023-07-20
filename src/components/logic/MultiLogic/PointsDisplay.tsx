import React, { useState, useEffect } from 'react';
import '../../css/button.css';
import { ResetPointsBtn } from '../../utils/buttons/ResetPointsBtn';


export const PointsDisplay: React.FC = () => {
  const [pktG1, setPktG1] = useState<number | null>(null);
  const [pktG2, setPktG2] = useState<number | null>(null);
  const [showPoints, setShowPoints] = useState(true);

  useEffect(() => {
    const storedPktG1 = localStorage.getItem('pktG1');
    const storedPktG2 = localStorage.getItem('pktG2');

    if (storedPktG1 && storedPktG2) {
      setPktG1(Number(storedPktG1));
      setPktG2(Number(storedPktG2));
    }
  }, []);

  const handleReset = () => {
    setShowPoints(false);
  };

  if (pktG1 === null || pktG2 === null) {
    return (
      <div className="button-menu__options">
        <p className="text__main blink-red">Rogrywka wkrotce sie rozpocznie...</p>
      </div>
    );
  }

  if (!showPoints) {
    return (
      <div className="button-menu__options">
        <p className="text__main blink-red">Rogrywka wkrotce sie rozpocznie...</p>
      </div>
    );
  }

  return (
    <div className="button-menu__options">
      <p>Black: {pktG1} vs Grey: {pktG2}</p>
      <ResetPointsBtn handleReset={handleReset} />
    </div>
  );
};
