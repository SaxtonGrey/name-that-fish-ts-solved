import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { Images } from "../../assets/Images";
import { useState } from "react";
import { Fish } from "../../types";

const initialFishes: Fish[] = [
  {
    image: Images.trout,
    name: "trout",
  },
  {
    image: Images.salmon,
    name: "salmon",
  },
  {
    image: Images.tuna,
    name: "tuna",
  },
  {
    image: Images.shark,
    name: "shark",
  },
];

export function FunctionalApp() {
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  const totalCount = correct + incorrect;
  const currentFish = initialFishes[totalCount];
  const answersLeft = initialFishes.slice(totalCount).map((fish) => fish.name);

  const handleGuess = (answer: string) => {
    if (currentFish.name.toLowerCase() === answer.toLowerCase()) {
      setCorrect((correct) => correct + 1);
    } else {
      setIncorrect((incorrect) => incorrect + 1);
    }
  };

  return (
    <>
      <FunctionalScoreBoard
        correctCount={correct}
        incorrectCount={incorrect}
        answersLeft={answersLeft}
      />
      {correct + incorrect != 4 && (
        <FunctionalGameBoard onGuess={handleGuess} currentFish={currentFish} />
      )}
      {correct + incorrect === 4 && (
        <FunctionalFinalScore
          correctCount={correct}
          totalCount={correct + incorrect}
        />
      )}
    </>
  );
}
