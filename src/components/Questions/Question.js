import "./Question.css";
import React from "react";

function Question(props) {
  const { defaultCollapsed } = props;
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed === false ? false : true);
  return (
    <div className="question-container">
      <div className="question" onClick={() => (collapsed ? setCollapsed(false) : setCollapsed(true))}>
        <div className="question-text">
          LOREM IPSUM HAS BEEN THE INDUSRY'S STANDARD
        </div>
        <div
          className="question-icon"
        >
          {collapsed ? "+" : "-"}
        </div>
      </div>
      <div className="answer" style={{display: (collapsed ? "none" : "block")}}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.
      </div>
    </div>
  );
}

export default Question;
