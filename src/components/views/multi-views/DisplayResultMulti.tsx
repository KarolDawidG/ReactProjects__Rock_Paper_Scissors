import '../../css/multi-view.css';
import {RedirectBtn} from '../../utils/buttons/RedirectBtn';

type RedirectBtnProps = {
  pktG1: number;
  pktG2: number;
  result: string;
  sentence: string;
  img1: string;
  img2: string;
};

export const DisplayResultMulti: React.FC<RedirectBtnProps> = ({pktG1, pktG2, sentence, result, img1, img2}) => {
  return (
    <>
      <div className='main-div'>
        <RedirectBtn to="/multi">Zagraj jeszcze raz</RedirectBtn>
          <h2 className="text__main blink-red">{result}</h2>
          <p style={{ marginBottom: '0.1rem' }}>Angel Black vs Alex Grey</p>
          <p style={{ marginBottom: '0.1rem' }}>{pktG1} : {pktG2}</p>
 
          <p className="text color-change">{sentence}</p>
              <div className='img-div'>
                  <img src={`../img/${img1}.jpg`} alt="img player 1" className="multi-game__girl-image" />
                  <img src={`../img/${img2}.jpg`} alt="img player 2" className="multi-game__girl-image" />
              </div>
      </div>
    </>
  );
};