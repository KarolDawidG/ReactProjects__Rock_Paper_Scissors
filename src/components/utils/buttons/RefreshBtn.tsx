import { useNavigate } from "react-router-dom";

export const RefreshBtn = () => {
  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0);
  }

  return (
    <div>
      <button onClick={refreshPage}>Odswiez</button>
    </div>
  );
}



