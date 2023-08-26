// If you have any types that are SHARED BY MANY COMPONENTS,put them here
export type Fish = {
  url: string;
  alt: string;
};

export type GameBoardProps = {
  onGuess: (isCorrect: boolean) => void;
};

export type AppProps = unknown;

export type AppState = {
  correct: number;
  incorrect: number;
  answersLeft: string[];
  doneGuessing: boolean;
};

export type FinalScoreProps = {
  correctCount: number;
  totalCount: number;
};

export type ScoreBoardProps = {
  correctCount: number;
  incorrectCount: number;
  answersLeft: string[];
};
