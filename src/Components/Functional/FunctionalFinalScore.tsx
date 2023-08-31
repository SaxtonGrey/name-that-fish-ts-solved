import "./styles/final-score.css";

type FinalScoreProps = {
  correctCount: number;
  totalCount: number;
};

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
