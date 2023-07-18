import '../../css/multi-view.css';

export const FirstWin = () => {
  return (
    <>
      <div className='main-div'>
        <h2 className="text__main blink-red">Wygrywa gracz numer 1!</h2>
        <p className="text color-change">Gratulacje</p>
            <div className='img-div'>
                <img src="../img/happyBlack.jpg" alt="Kamień" className="multi-game__girl-image" />
                <img src="../img/sadGrey.jpg" alt="Kamień" className="multi-game__girl-image" />
            </div>
      </div>
    </>
  );
};
