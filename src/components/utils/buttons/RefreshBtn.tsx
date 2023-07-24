import { useNavigate } from "react-router-dom";
import '../../css/button.css';

export const RefreshBtn = () => {
  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0);
  }

  return (
    <div>
      <button className="game__reset-button" onClick={refreshPage}>Odswiez</button>
    </div>
  );
}



