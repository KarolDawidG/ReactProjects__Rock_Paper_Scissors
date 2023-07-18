import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/button.css';

type RedirectBtnProps = {
  to: string;
  children: string;
};

export const RedirectBtn: React.FC<RedirectBtnProps> = ({ to, children }) => {
  return (
    <div className="menu">
      <div className="button-menu__options">
        <Link to={to}>
          <button className="game__reset-button">{children}</button>
        </Link>
      </div>
    </div>
  );
};
