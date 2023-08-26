import { Component } from "react";
import "./styles/game-board.css";
import { Images } from "../../assets/Images";

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

class ClassGameBoard extends Component<FunctionalGameBoardProps> {
  state = {
    userGuess: "",
    currentFishIndex: 0,
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { userGuess, currentFishIndex } = this.state;
    const { onGuess } = this.props;
    const { alt } = initialFishes[currentFishIndex];
    const isCorrect = userGuess.toLowerCase() === alt.toLowerCase();
    onGuess(isCorrect);
    this.setState({
      userGuess: "",
      currentFishIndex: currentFishIndex + 1,
    });
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      userGuess: e.target.value,
    });
  };

  render() {
    const { userGuess, currentFishIndex } = this.state;
    const { url, alt } = initialFishes[currentFishIndex];

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={url} alt={alt} />
        </div>
        <form id="fish-guess-form" onSubmit={this.handleSubmit}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            id="fish-guess"
            value={userGuess}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default ClassGameBoard;
