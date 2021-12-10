import React, { Component } from 'react';
import { render } from 'react-dom';
import { Game } from './Game';
import { CATEGORIES, ROW_AMOUNTS } from './GameSetup';
import './style.css';

function App() {
  // export interface GameProps {
  //   rowValues: string[];
  //   categories: string[];
  //   answers: AnswerVal[][];
  //   resetCompleted: boolean[][];
  // }

  const categories = CATEGORIES.map(({ name }) => name);
  const resetCompleted = ROW_AMOUNTS.map(() => categories.map(() => false));
  const answers = CATEGORIES.map(({ answers }) => answers);

  return (
    <Game
      categories={categories}
      resetCompleted={resetCompleted}
      rowValues={ROW_AMOUNTS}
      answers={answers}
    />
  );
}

render(<App />, document.getElementById('root'));
