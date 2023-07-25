export const Algorithm = (playerChoices: number[]) => {
    if (playerChoices.length < 3) {             // Sprawdź, czy mamy wystarczającą ilość danych, aby dokonać analizy
      return Math.floor(Math.random() * 3) + 1;
    }
  const choiceCounts: { [key: number]: number } = { 1: 0, 2: 0, 3: 0 };
    for (const choice of playerChoices) {
      choiceCounts[choice]++;
    }
    let mostFrequentChoice: number = 1;
      for (const choice in choiceCounts) {
        if (choiceCounts[choice] > choiceCounts[mostFrequentChoice]) {
          mostFrequentChoice = parseInt(choice);
        }
      }
       let estimatedChoice: number = (mostFrequentChoice % 3) + 1;
          return estimatedChoice;
};


// zbyt trudna wersja, bo komputer od początku znał pierwszy wybór gracza, a więc pierwszą runde zawsze wygrywał
// export const Algorithm = (playerChoices: number[]): number => { 
//    const choiceCounts: { [key: number]: number } = { 1: 0, 2: 0, 3: 0 };  //zlicza ilość  wystąpień wyborów
//         for (const choice of playerChoices) {       // Zlicz wystąpienia każdego wyboru w historii gracza
//         choiceCounts[choice]++;
//         }
  
//     let mostFrequentChoice: number = 1;        // Znajdź najczęściej występujący wybór gracza
//     for (const choice in choiceCounts) {
//       if (choiceCounts[parseInt(choice)] > choiceCounts[mostFrequentChoice]) {
//         mostFrequentChoice = parseInt(choice);
//       }
//     }
  
//     let estimatedChoice: number = (mostFrequentChoice % 3) + 1;  // Szacuj kolejny wybór komputera 
  
//     return estimatedChoice;
//   };
  