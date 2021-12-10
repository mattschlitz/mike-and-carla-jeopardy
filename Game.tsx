import React, { useState } from 'react';
import { Answer } from './Answer';
import { Board } from './Board';
import { AnswerVal } from './GameSetup';
import { useLocalStorage } from './useLocalStorage';

export interface GameProps {
  rowValues: string[];
  categories: string[];
  answers: AnswerVal[][];
  resetCompleted: boolean[][];
}

export function Game({
  rowValues,
  categories,
  answers,
  resetCompleted,
}: GameProps) {
  const [currentAnswer, setCurrentAnswer] = useState(undefined);
  const [complete, setCompleted] = useLocalStorage(
    'jeopardyCompleted',
    resetCompleted
  );
  const showCell = (rowIndex, columnIndex) => {
    setCompleted(
      complete.map((row, i) =>
        i == rowIndex
          ? row.map((isComplete, j) => j == columnIndex || isComplete)
          : row
      )
    );
    setCurrentAnswer(answers[columnIndex][rowIndex]);
  };
  const doReset = () => {
    setCompleted(resetCompleted);
  };
  const backToBoard = () => {
    setCurrentAnswer(null);
  };

  return (
    <div className="App">
      {currentAnswer ? (
        <Answer
          answer={currentAnswer.answer}
          question={currentAnswer.question}
          backToBoard={backToBoard}
        />
      ) : (
        <Board
          complete={complete}
          showCell={showCell}
          doReset={doReset}
          rowValues={rowValues}
          categories={categories}
        />
      )}
    </div>
  );
}
