import { useState } from 'react';
import React = require('react');

export interface AnswerProps {
  answer: string;
  question: string;
  backToBoard: () => void;
}

export function Answer({ answer, question, backToBoard }: AnswerProps) {
  const [viewQuestion, setViewQuestion] = useState(false);

  if (viewQuestion) {
    return (
      <React.Fragment>
        <div className="Answer">{question}</div>
        <a className="ActionButton TopRight" onClick={backToBoard}>
          <span className="ShowOnHover">Back to Board</span>
          🏠
        </a>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div className="Answer">{viewQuestion ? question : answer}</div>
      <a
        className="ActionButton TopRight"
        onClick={() => setViewQuestion(true)}
      >
        <span className="ShowOnHover">View Answer</span>
        ➡️
      </a>
    </React.Fragment>
  );
}
