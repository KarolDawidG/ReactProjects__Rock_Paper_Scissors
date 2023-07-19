import '../../css/CountdownAnimation.css';
import { CountdownCircle } from './CountdownCircle';


export const Loading = () => {
  return <>
        <p className='second-player-time'>Czas na decyzje!</p>
        <CountdownCircle/>
  </>
};

