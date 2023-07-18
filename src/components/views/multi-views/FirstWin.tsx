import '../../css/multi-view.css';
import {MultiPktInterfaceProps} from '../../utils/interface/MultiPktInterfaceProps';
import {RedirectBtn} from '../../utils/buttons/RedirectBtn';

export const FirstWin: React.FC<MultiPktInterfaceProps> = ({pktG1, pktG2}) => {
  return (
    <>
      <div className='main-div'>
        <RedirectBtn to="/multi">Zagraj jeszcze raz</RedirectBtn>
            <h2 className="text__main blink-red">Wygrywa gracz numer 1!</h2>
            <p>Punkty 1: {pktG1} oraz Punkty 2: {pktG2}</p>
            <p className="text color-change">Gratulacje</p>
                <div className='img-div'>
                    <img src="../img/happyBlack.jpg" alt="Kamień" className="multi-game__girl-image" />
                    <img src="../img/sadGrey.jpg" alt="Kamień" className="multi-game__girl-image" />
                </div>
      </div>
    </>
  );
};
