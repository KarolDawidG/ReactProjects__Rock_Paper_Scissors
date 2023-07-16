import { Link } from 'react-router-dom';
import './style.css';

export const Button = () => {
  return (
    <div className="menu">
      <div className="button-menu__options">
        <Link to="/">
          <button className="game__reset-button">Strona główna</button>
        </Link>
      </div>
    </div>
  );
};


