import '../../css/button.css';

export const ResetPointsBtn = () => {
  const handleClick = () => {
    localStorage.removeItem('pktG1');
    localStorage.removeItem('pktG2');
    //window.location.reload();
  };

return (
  <div className="menu">
    <div className="button-menu__options">
        <button className="game__reset-button" onClick={handleClick}>Resetuj punkty</button>     
    </div>
  </div>
);
};