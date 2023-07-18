import '../../css/multi-view.css';
import {RedirectBtn} from '../../utils/buttons/RedirectBtn';
import {MultiPktInterfaceProps} from '../../utils/interface/MultiPktInterfaceProps';

export const SecondWin: React.FC<MultiPktInterfaceProps> = ({pktG1, pktG2}) => {
  return (
    <>
      <div className='main-div'>
        <RedirectBtn to="/multi">Zagraj jeszcze raz</RedirectBtn>
          <h2 className="text__main blink-red">Gracz drugi zwyciężył!</h2>
          <p>Punkty 1: {pktG1} oraz Punkty 2: {pktG2}</p>
          <p className="text color-change">Gratulacje!</p>
              <div className='img-div'>
                  <img src="../img/sadBlack.jpg" alt="sadBlack" className="multi-game__girl-image" />
                  <img src="../img/happyGrey.jpg" alt="happyGrey" className="multi-game__girl-image" />
              </div>
      </div>
    </>
  );
};
