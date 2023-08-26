import { Component } from "react";
import ClassGameBoard from "./ClassGameBoard";
import ClassScoreBoard from "./ClassScoreBoard";
import ClassFinalScore from "./ClassFinalScore";

type ClassAppProps = unknown;
type ClassAppState = {
  correct: number;
  incorrect: number;
  answersLeft: string[];
  doneGuessing: boolean;
};

class ClassApp extends Component<ClassAppProps, ClassAppState> {
  constructor(props: ClassAppProps) {
    super(props);
    this.state = {
      correct: 0,
      incorrect: 0,
      answersLeft: ["trout", "salmon", "tuna", "shark"],
      doneGuessing: false,
    };
  }

  handleGuess = (isCorrect: boolean | null) => {
    if (isCorrect) {
      this.setState((prevState) => ({
        correct: prevState.correct + 1,
      }));
    } else {
      this.setState((prevState) => ({
        incorrect: prevState.incorrect + 1,
      }));
    }

    const updatedAnswersLeft = this.state.answersLeft.slice(1);
    this.setState({
      answersLeft: updatedAnswersLeft,
    });

    if (updatedAnswersLeft.length === 0) {
      this.setState({
        doneGuessing: true,
      });
    }
  };

  render() {
    const { correct, incorrect, answersLeft, doneGuessing } = this.state;

    return (
      <div>
        <ClassScoreBoard
          correctCount={correct}
          incorrectCount={incorrect}
          answersLeft={answersLeft}
        />
        {!doneGuessing && <ClassGameBoard onGuess={this.handleGuess} />}
        {doneGuessing && (
          <ClassFinalScore
            correctCount={correct}
            totalCount={correct + incorrect}
          />
        )}
      </div>
    );
  }
}

export default ClassApp;
