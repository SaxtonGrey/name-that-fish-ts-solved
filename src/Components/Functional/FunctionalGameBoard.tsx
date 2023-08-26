import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { useState } from "react";

type Fish = {
  url: string;
  alt: string;
};

type FunctionalGameBoardProps = {
  onGuess: (isCorrect: boolean) => void;
};

const initialFishes: Fish[] = [
  {
    url: Images.trout,
    alt: "trout",
  },
  {
    url: Images.salmon,
    alt: "salmon",
  },
  {
    url: Images.tuna,
    alt: "tuna",
  },
  {
    url: Images.shark,
    alt: "shark",
  },
];

export function FunctionalGameBoard({ onGuess }: FunctionalGameBoardProps) {
  const [userGuess, setUserGuess] = useState("");
  const [currentFishIndex, setCurrentFishIndex] = useState(0);

  const { url, alt } = initialFishes[currentFishIndex];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isCorrect = userGuess.toLowerCase() === alt.toLowerCase();
    onGuess(isCorrect);
    setUserGuess("");
    setCurrentFishIndex(currentFishIndex + 1);
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={url} alt={alt} />
      </div>
      <form id="fish-guess-form" onSubmit={handleSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          id="fish-guess"
          value={userGuess}
          onChange={(e) => {
            setUserGuess(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
