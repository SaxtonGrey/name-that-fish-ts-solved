import { Component } from "react";

type ClassFinalScoreProps = {
  correctCount: number;
  totalCount: number;
};

class ClassFinalScore extends Component<ClassFinalScoreProps> {
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
