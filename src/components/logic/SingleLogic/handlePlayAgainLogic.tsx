export const PlayAgainLogic = (
  setWynik: React.Dispatch<React.SetStateAction<string>>,
  setOpcjaNumber: React.Dispatch<React.SetStateAction<number | null>>,
  setR: React.Dispatch<React.SetStateAction<number | null>>,
  punkty: number,
  punktyPC: number
) => {
  setWynik('');
  setOpcjaNumber(null);
  setR(null);

};
