import "./styles/score-board.css";
//  Where the score is presented
import { ScoreBoardProps } from "../../types";

export function FunctionalScoreBoard({
  correctCount,
  incorrectCount,
  answersLeft,
}: ScoreBoardProps) {
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
