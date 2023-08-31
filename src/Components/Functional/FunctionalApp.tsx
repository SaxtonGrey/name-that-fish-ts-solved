import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { Images } from "../../assets/Images";
import { useState } from "react";

export type Fish = {
  image: string;
  name: string;
};

export function FunctionalApp() {
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

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

  const currentFish = initialFishes[correct + incorrect];
  const totalCount = correct + incorrect;
  const fishesLeft = initialFishes.slice(totalCount);
  const answersLeft = fishesLeft.map((fish) => fish.name);

  const handleGuess = (isCorrect: boolean | null) => {
    if (isCorrect) {
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
