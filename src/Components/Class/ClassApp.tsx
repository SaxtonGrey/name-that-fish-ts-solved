import { Component } from "react";
import { ClassGameBoard } from "./ClassGameBoard"; // Update import paths accordingly
import { ClassScoreBoard } from "./ClassScoreBoard"; // Update import paths accordingly
import ClassFinalScore from "./ClassFinalScore"; // Update import paths accordingly
import { Images } from "../../assets/Images"; // Update import paths accordingly

export type Fish = {
  image: string;
  name: string;
};

type AppProps = unknown;

export class ClassApp extends Component<AppProps> {
  state = {
    correct: 0,
    incorrect: 0,
  };

  initialFishes = [
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

  handleGuess = (isCorrect: boolean | null) => {
    if (isCorrect) {
      this.setState(() => ({
        correct: this.state.correct + 1,
      }));
    } else {
      this.setState(() => ({
        incorrect: this.state.incorrect + 1,
      }));
    }
  };

  render() {
    const { correct, incorrect } = this.state;
    const currentFish = this.initialFishes[correct + incorrect];
    const totalCount = correct + incorrect;
    const fishesLeft = this.initialFishes.slice(totalCount);
    const answersLeft = fishesLeft.map((fish) => fish.name);

    return (
      <>
        <ClassScoreBoard
          correctCount={correct}
          incorrectCount={incorrect}
          answersLeft={answersLeft}
        />
        {correct + incorrect !== 4 && (
          <ClassGameBoard
            onGuess={this.handleGuess}
            currentFish={currentFish}
          />
        )}
        {correct + incorrect === 4 && (
          <ClassFinalScore
            correctCount={correct}
            totalCount={correct + incorrect}
          />
        )}
      </>
    );
  }
}
