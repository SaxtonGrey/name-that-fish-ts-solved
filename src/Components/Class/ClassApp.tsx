import { Component } from "react";
import { ClassGameBoard } from "./ClassGameBoard"; // Update import paths accordingly
import { ClassScoreBoard } from "./ClassScoreBoard"; // Update import paths accordingly
import ClassFinalScore from "./ClassFinalScore"; // Update import paths accordingly
import { Images } from "../../assets/Images"; // Update import paths accordingly

type AppProps = unknown;

const initialFishes = [
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

export class ClassApp extends Component<AppProps> {
  state = {
    correct: 0,
    incorrect: 0,
  };

  render() {
    const { correct, incorrect } = this.state;
    const currentFish = initialFishes[correct + incorrect];
    const totalCount = correct + incorrect;
    const answersLeft = initialFishes
      .slice(totalCount)
      .map((fish) => fish.name);

    const handleGuess = (answer: string) => {
      if (currentFish.name.toLowerCase() === answer.toLowerCase()) {
        this.setState(() => ({
          correct: correct + 1,
        }));
      } else {
        this.setState(() => ({
          incorrect: incorrect + 1,
        }));
      }
    };

    return (
      <>
        <ClassScoreBoard
          correctCount={correct}
          incorrectCount={incorrect}
          answersLeft={answersLeft}
        />
        {correct + incorrect !== 4 && (
          <ClassGameBoard onGuess={handleGuess} currentFish={currentFish} />
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
