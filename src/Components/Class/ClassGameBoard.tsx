import React, { Component } from "react";
import "./styles/game-board.css";
import { Fish } from "./ClassApp"; // Update import paths accordingly

type GameBoardProps = {
  onGuess: (isCorrect: boolean) => void;
  currentFish: Fish;
};

export class ClassGameBoard extends Component<GameBoardProps> {
  state = {
    userGuess: "",
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isCorrect =
      this.state.userGuess.toLowerCase() ===
      this.props.currentFish.name.toLowerCase();
    this.props.onGuess(isCorrect);
    this.setState({ userGuess: "" });
  };

  render() {
    const { image, name } = this.props.currentFish;
    const { userGuess } = this.state;

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={image} alt={name} />
        </div>
        <form id="fish-guess-form" onSubmit={this.handleSubmit}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            id="fish-guess"
            value={userGuess}
            onChange={(e) => {
              this.setState({ userGuess: e.target.value });
            }}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
