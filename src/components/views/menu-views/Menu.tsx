import { Link } from 'react-router-dom';
import '../../css/style.css';
import { ImageMenu } from '../../utils/other/ImageMenu';

export const Menu = () => {
  return (
      <div className="menu">
            <div className="button-menu__options">
                  <Link to="/single">
                    <button className="game__reset-button">Single Player</button>
                  </Link>
                  <Link to="/multi">
                    <button className="game__reset-button">Multiplayer</button>
                  </Link>
                  <ImageMenu/>
            </div>
      </div>
  );
};


