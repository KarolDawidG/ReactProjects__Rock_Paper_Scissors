import '../../css/multi-view.css';

export const SecondWin = () => {
  return (
    <>
      <div className='main-div'>
        <h2 className="text__main blink-red">Gracz drugi zwyciężył!</h2>
        <p className="text color-change">Gratulacje!</p>
            <div className='img-div'>
                <img src="../img/sadBlack.jpg" alt="sadBlack" className="multi-game__girl-image" />
                <img src="../img/happyGrey.jpg" alt="happyGrey" className="multi-game__girl-image" />
            </div>
      </div>
    </>
  );
};
