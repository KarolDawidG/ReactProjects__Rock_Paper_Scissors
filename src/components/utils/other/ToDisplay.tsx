export const ToDisplay = (opcja: any) => {
    if (opcja === 1) {
      return {
        nazwa: 'Paper',
        obrazek: 'sheet.png'
      };
    } else if (opcja === 2) {
      return {
        nazwa: 'Scissors',
        obrazek: 's.png'
      };
    } else if (opcja === 3) {
      return {
        nazwa: 'Stone',
        obrazek: 'stone.png'
      };
    }
  };