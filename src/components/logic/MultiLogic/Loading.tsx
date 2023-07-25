import '../../css/CountdownAnimation.css';
import { CountdownCircle } from './CountdownCircle';

export const Loading = () => {
  return <>
        <p className='second-player-time'>Time to make decisions!</p>
        <CountdownCircle/>
  </>
};

