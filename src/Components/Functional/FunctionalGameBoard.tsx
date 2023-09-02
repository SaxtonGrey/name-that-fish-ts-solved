import "./styles/game-board.css";
import { useState } from "react";
import { Fish } from "../../types";

type GameBoardProps = {
  onGuess: (name: string) => void;
  currentFish: Fish;
};

export function FunctionalGameBoard({ onGuess, currentFish }: GameBoardProps) {
  const [userGuess, setUserGuess] = useState("");
  const { image, name } = currentFish;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onGuess(userGuess);
    setUserGuess("");
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={image} alt={name} />
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
