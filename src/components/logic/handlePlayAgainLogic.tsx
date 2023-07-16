export const handlePlayAgainLogic = (
  setWynik: React.Dispatch<React.SetStateAction<string>>,
  setOpcjaNumber: React.Dispatch<React.SetStateAction<number | null>>,
  setR: React.Dispatch<React.SetStateAction<number | null>>,
  render: (template: string, data?: any) => void,
  punkty: number,
  punktyPC: number
) => {
  setWynik('');
  setOpcjaNumber(null);
  setR(null);
  render('index', { punkty, punktyPC });
};
