import "./Questions.css";
import Question from "./Question";

function Questions() {
  return (
    <div className="questions-container">
      <div className="questions-title">FREQUENTLY ASKED QUESTIONS (FAQ)</div>
      <Question defaultCollapsed={false} />
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
    </div>
  );
}

export default Questions;
