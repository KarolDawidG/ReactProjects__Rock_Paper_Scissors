import '../../css/button.css';

type ResetPointsBtnProps = {
  handleLevelChange: () => void;
  level: string;
};

export const LevelBtn: React.FC<ResetPointsBtnProps> = ({handleLevelChange, level}) => {

  return (
    <div className="menu">
      <div className="button-menu__options">
        <button className="game__reset-button" onClick={handleLevelChange}>
        {level === 'easy' ? 'Zmień na HARD' : 'Zmień na EASY'}
        </button>
      </div>
    </div>
  );
};
