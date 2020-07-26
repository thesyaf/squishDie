import React, { useState, useEffect } from 'react';
import { isIOS } from 'react-device-detect';

const gimmeDots = (n) => {
  let buttonsArr = [];
  for (let index = 0; index < n; index++) {
    buttonsArr.push({ id: index, active: false });
  }

  return buttonsArr;
};

const rnd = () => Math.floor(Math.random() * 6 + 1);

const defaultGrid = [
  [1, 0, 1],
  [1, 1, 1],
  [1, 1, 1],
];

export default function DieAlt(props) {
  const [dieOne, setDieOne] = useState([]);
  const [rollResult, setRollResult] = useState(1);
  const [grid, setGrid] = useState(defaultGrid);

  useEffect(() => {
    setDieOne(gimmeDots(rollResult));
    let newGrid = [];
    switch (rollResult) {
      case 1:
        newGrid = [
          [0, 0, 0],
          [0, 1, 0],
          [0, 0, 0],
        ];
        setGrid(newGrid);
        break;
      case 2:
        newGrid = [
          [0, 0, 1],
          [0, 0, 0],
          [1, 0, 0],
        ];
        setGrid(newGrid);
        break;
      case 3:
        newGrid = [
          [0, 0, 1],
          [0, 1, 0],
          [1, 0, 0],
        ];
        setGrid(newGrid);
        break;
      case 4:
        newGrid = [
          [1, 0, 1],
          [0, 0, 0],
          [1, 0, 1],
        ];
        setGrid(newGrid);
        break;
      case 5:
        newGrid = [
          [1, 0, 1],
          [0, 1, 0],
          [1, 0, 1],
        ];
        setGrid(newGrid);
        break;
      default:
        newGrid = [
          [1, 0, 1],
          [1, 0, 1],
          [1, 0, 1],
        ];
        setGrid(newGrid);
        break;
    }
  }, [rollResult]);

  const dieSize = '30vh';

  const roll = (e) => {
    e.stopPropagation();
    if (!isIOS) {
      window.navigator.vibrate(100);
    }
    setRollResult(0);
    setTimeout(() => setRollResult(rnd()), 3000);
  };

  return (
    <div
      className="die purple"
      style={{ width: dieSize, height: dieSize }}
      onClick={(e) => roll(e)}
    >
      <div className="dots-container">
        {grid.map((row) =>
          row.map((item) => (
            <div className="dot-one">
              <span className={`dot purple ${item !== 1 ? 'hide' : 'show'}`} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
