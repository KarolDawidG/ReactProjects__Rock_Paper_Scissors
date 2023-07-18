import '../../css/multi-view.css';
import {MultiPktInterfaceProps} from '../../utils/interface/MultiPktInterfaceProps';
import {RedirectBtn} from '../../utils/buttons/RedirectBtn';

export const RemisMulti: React.FC<MultiPktInterfaceProps> = ({pktG1, pktG2}) => {
  return (
    <>
      <div className='main-div'>
        
        <RedirectBtn to="/multi">Zagraj jeszcze raz</RedirectBtn>
          <h2 className="text__main blink-red">R E M I S</h2>
          <p>Punkty 1: {pktG1} oraz Punkty 2: {pktG2}</p>
          <p className="text color-change">Nikt nie przegrał, nikt nie wygrał !</p>
              <div className='img-div'>
                  <img src="../img/disBlack.jpg" alt="disBlack" className="multi-game__girl-image" />
                  <img src="../img/disGrey.jpg" alt="disGrey" className="multi-game__girl-image" />
              </div>
      </div>
    </>
  );
};
