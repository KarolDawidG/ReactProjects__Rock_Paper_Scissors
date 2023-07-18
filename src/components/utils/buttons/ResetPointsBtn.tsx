import React, { useState } from 'react';

export const ResetPointsBtn = () => {
  const [resetKey, setResetKey] = useState(0);

  const handleClick = () => {
    localStorage.removeItem('pktG1');
    localStorage.removeItem('pktG2');
    setResetKey((prevKey) => prevKey + 1);
  };

  const Refresh = () => {
    setTimeout(() => {
      window.location.reload();
    }, 100);
    return null;
  };

  return (
    <div className="menu">
      <div className="button-menu__options">
        <button className="game__reset-button" onClick={handleClick}>Resetuj punkty</button>
      </div>
      {resetKey % 2 === 0 ? null : <Refresh />}
    </div>
  );
};


