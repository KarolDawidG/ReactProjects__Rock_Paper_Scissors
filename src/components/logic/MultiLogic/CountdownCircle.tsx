import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../../css/CountdownCircle.css";

const renderTime = ({ remainingTime }: { remainingTime: number }) => {
  return (
    <div className="timer">
      <div className="text">You have just</div>
      <div className="value">{remainingTime} s</div>
      <div className="text">Rush!</div>
    </div>
  );
};

export const CountdownCircle = () => {
  return (
    <div className="App">
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={5}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: true, delay: 1 })}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}


