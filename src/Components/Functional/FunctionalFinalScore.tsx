import "./styles/final-score.css";
import { FinalScoreProps } from "../../types";

export const FunctionalFinalScore = ({
  correctCount,
  totalCount,
}: FinalScoreProps) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correctCount}</p>
      <hr />
      <p>{totalCount}</p>
    </div>
  </div>
);
