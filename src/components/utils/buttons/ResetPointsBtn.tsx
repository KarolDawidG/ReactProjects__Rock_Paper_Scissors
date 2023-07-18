    import '../../css/button.css';

    type ResetPointsBtnProps = {
      handleReset: () => void;
    };
    
    export const ResetPointsBtn: React.FC<ResetPointsBtnProps> = ({ handleReset }) => {
      const handleClick = () => {
        localStorage.removeItem('pktG1');
        localStorage.removeItem('pktG2');
        handleReset();
      };
    
      return (
        <div className="menu">
          <div className="button-menu__options">
            <button className="game__reset-button" onClick={handleClick}>
              Resetuj punkty
            </button>
          </div>
        </div>
      );
    };