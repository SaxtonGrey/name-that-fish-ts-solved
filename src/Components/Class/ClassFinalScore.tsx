import { Component } from "react";

type FinalScoreProps = {
  correctCount: number;
  totalCount: number;
};

class ClassFinalScore extends Component<FinalScoreProps> {
  render() {
    const { correctCount, totalCount } = this.props;
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correctCount}</p>
          <hr />
          <p>{totalCount}</p>
        </div>
      </div>
    );
  }
}

export default ClassFinalScore;
