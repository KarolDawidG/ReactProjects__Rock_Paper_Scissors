export const ToDisplay = (opcja: any) => {
    if (opcja === 1) {
      return {
        nazwa: 'Papier',
        obrazek: 'sheet.png'
      };
    } else if (opcja === 2) {
      return {
        nazwa: 'Nożyce',
        obrazek: 's.png'
      };
    } else if (opcja === 3) {
      return {
        nazwa: 'Kamień',
        obrazek: 'stone.png'
      };
    }
  };