import { Link } from 'react-router-dom';
import '../../css/button.css'

export const MainPageButton = () => {
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


