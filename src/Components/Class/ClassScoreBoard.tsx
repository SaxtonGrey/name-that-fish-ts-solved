import { Component } from "react";
import "./styles/score-board.css";

type FunctionalScoreBoardProps = {
  correctCount: number;
  incorrectCount: number;
  answersLeft: string[];
};

class ClassScoreBoard extends Component<FunctionalScoreBoardProps> {
  render() {
    const { correctCount, incorrectCount, answersLeft } = this.props;

    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {answersLeft.map((answer: string) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
      </div>
    );
  }
}

export default ClassScoreBoard;
