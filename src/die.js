import React, { useState, useEffect } from 'react';

const gimmeDots = (n) => {
  let buttonsArr = [];
  for (let index = 0; index < n; index++) {
    buttonsArr.push({ id: index, active: false });
  }

  return buttonsArr;
};

const rnd = () => Math.floor(Math.random() * 6 + 1);

export default function Die(props) {
  const [dieOne, setDieOne] = useState([]);
  const [rollResult, setRollResult] = useState(1);

  useEffect(() => {
    setDieOne(gimmeDots(rollResult));
  }, [rollResult]);

  const dotStyles = {
    1: { dot: '80%', box: '50%' },
    2: { dot: '70%', box: '40%' },
    3: { dot: '80%', box: '30%' },
    4: { dot: '60%', box: '50%' },
    5: { dot: '70%', box: '30%' },
    6: { dot: '70%', box: '30%' },
  };

  const dieSize = '30vh';

  const roll = (e) => {
    e.stopPropagation();
    setRollResult(0);
    setTimeout(() => setRollResult(rnd()), 1000);
  };

  return (
    <div
      className="die purple"
      style={{ width: dieSize, height: dieSize }}
      onClick={(e) => roll(e)}
    >
      {gimmeDots(rollResult).map((b, i) => {
        return (
          <div
            className="dot-box"
            style={{
              width: dotStyles[rollResult]?.box,
              height: dotStyles[rollResult]?.box,
            }}
          >
            <span
              key={i}
              className={`dot purple `}
              style={{
                width: dotStyles[rollResult]?.dot,
                height: dotStyles[rollResult]?.dot,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
