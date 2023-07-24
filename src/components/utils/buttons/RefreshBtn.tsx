import React from 'react';
import '../../css/button.css';

export const RefreshBtn: React.FC = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="menu">
      <div className="button-menu__options">
      <button className="game__reset-button" onClick={handleRefresh}>
      Jeszcze raz
    </button>
      </div>
    </div>
  );
};


