export const Algorithm = (playerChoices: number[]): number => { 
   const choiceCounts: { [key: number]: number } = { 1: 0, 2: 0, 3: 0 };  //zlicza ilość  wystąpień wyborów
        for (const choice of playerChoices) {       // Zlicz wystąpienia każdego wyboru w historii gracza
        choiceCounts[choice]++;
        }
  
    let mostFrequentChoice: number = 1;        // Znajdź najczęściej występujący wybór gracza
    for (const choice in choiceCounts) {
      if (choiceCounts[parseInt(choice)] > choiceCounts[mostFrequentChoice]) {
        mostFrequentChoice = parseInt(choice);
      }
    }
  
    let estimatedChoice: number = (mostFrequentChoice % 3) + 1;  // Szacuj kolejny wybór komputera 
  
    return estimatedChoice;
  };
  