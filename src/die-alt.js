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
  [1, 0, 1],
  [1, 0, 1],
];

export default function DieAlt({ rollDie }) {
  const [isRolling, setIsRolling] = useState(false);
  const [grid, setGrid] = useState(defaultGrid);

  useEffect(() => {
    setIsRolling(rollDie);
  }, [rollDie]);

  const getNewGrid = (result) => {
    let newGrid = [];
    switch (result) {
      case 0:
        newGrid = [
          [0, 0, 0],
          [0, 1, 0],
          [0, 0, 0],
        ];
        setGrid(newGrid);
        break;
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
    console.log('g', grid, result);
  };

  const dieSize = '30vh';

  useEffect(() => {
    if (isRolling) {
      setTimeout(() => {
        getNewGrid(rnd());
      }, 2000);
    }
  }, [isRolling]);

  const roll = (e) => {
    e && e.stopPropagation();
    if (!isIOS) {
      window.navigator.vibrate(100);
    }
  };

  const dieStyle = {
    width: '30vh',
    height: '30vh',
    background: 'linear-gradient(145deg, #582c99, #6934b6)',
    boxShadow: '9px 9px 18px #532a91, -9px -9px 18px #7138c4;',
  };

  return (
    <div className="die" style={dieStyle} onClick={(e) => roll(e)}>
      <div className="dots-container">
        {grid.map((row) =>
          row.map((item, i) => (
            <div key={i} className="dot-one">
              <span
                className={`dot purple ${
                  item !== 1 || isRolling ? 'hide' : 'show'
                }`}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
