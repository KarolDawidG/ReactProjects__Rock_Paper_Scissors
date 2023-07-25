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
        {level === 'easy' ? 'Change to HARD' : 'Change to EASY'}
        </button>
      </div>
    </div>
  );
};
