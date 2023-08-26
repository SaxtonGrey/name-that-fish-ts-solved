import { Component } from "react";
import "./styles/score-board.css";
import { ScoreBoardProps } from "../../types";

class ClassScoreBoard extends Component<ScoreBoardProps> {
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
