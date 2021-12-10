import React = require('react');

export interface BoardProps {
  complete: boolean[][];
  showCell: (row: number, col: number) => void;
  doReset: () => void;
  rowValues: string[];
  categories: string[];
}

export function Board({
  complete,
  showCell,
  doReset,
  rowValues,
  categories,
}: BoardProps) {
  return (
    <React.Fragment>
      <a
        className="ActionButton TopLeft"
        onClick={() =>
          window.confirm('Are you sure you want to reset the board?') &&
          doReset()
        }
      >
        🔁
        <span className="ShowOnHover">Reset Board</span>
      </a>
      <table>
        <thead>
          <tr>
            {categories.map((cat) => (
              <th key={cat}>{cat}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {complete.map((row, i) => (
            <tr key={i}>
              {row.map((isComplete, j) => (
                <td key={i + '-' + j} onClick={() => showCell(i, j)}>
                  {isComplete ? '\u00A0' : rowValues[i]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}
