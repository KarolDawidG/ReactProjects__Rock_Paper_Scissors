import '../../css/multi-view.css';

export const RemisMulti = () => {
  return (
    <>
      <div className='main-div'>
        <h2 className="text__main blink-red">R E M I S</h2>
        <p className="text color-change">Nikt nie przegrał, nikt nie wygrał !</p>
            <div className='img-div'>
                <img src="../img/disBlack.jpg" alt="disBlack" className="multi-game__girl-image" />
                <img src="../img/disGrey.jpg" alt="disGrey" className="multi-game__girl-image" />
            </div>
      </div>
    </>
  );
};
