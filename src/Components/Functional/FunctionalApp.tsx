import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp() {
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  const [answersLeft, setAnswersLeft] = useState([
    "trout",
    "salmon",
    "tuna",
    "shark",
  ]);
  const [doneGuessing, setDoneGuessing] = useState(false);

  const handleGuess = (isCorrect: boolean | null) => {
    if (isCorrect) {
      setCorrect((correct) => correct + 1);
    } else {
      setIncorrect((incorrect) => incorrect + 1);
    }
    const updatedAnswersLeft = answersLeft.slice(1);
    setAnswersLeft(updatedAnswersLeft);
    if (updatedAnswersLeft.length === 0) {
      setDoneGuessing(true);
    }
  };

  return (
    <>
      <FunctionalScoreBoard
        correctCount={correct}
        incorrectCount={incorrect}
        answersLeft={answersLeft}
      />
      {!doneGuessing && <FunctionalGameBoard onGuess={handleGuess} />}
      {doneGuessing && (
        <FunctionalFinalScore
          correctCount={correct}
          totalCount={correct + incorrect}
        />
      )}
    </>
  );
}
