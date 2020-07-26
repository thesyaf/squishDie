import React, { useState, useEffect } from 'react';
import DieAlt from './die-alt';
import './styles.scss';

export default function App() {
  const [isRolling, setIsRolling] = useState(false);

  useEffect(() => {
    if (document.documentElement.className === '') {
      document.documentElement.className = 'purple';
    }
  });

  useEffect(() => {
    if (isRolling) {
      setTimeout(() => {
        setIsRolling(false);
      }, 3000);
    }
  }, [isRolling]);

  const changeColour = (c) => {
    //clear classes
    document.documentElement.className = '';
    //add color class
    document.documentElement.classList.add(c);
  };

  const roll = () => {
    if (!isRolling) {
      setIsRolling(true);
    }
  };

  return (
    <div>
      {/* <button onClick={(e) => changeColour('yellow')}>yellow</button>
      <button onClick={(e) => changeColour('purple')}>purple</button> */}
      <div className="box">
        <DieAlt rollDie={isRolling} />
        <DieAlt rollDie={isRolling} />
      </div>
      <div
        className="roll-button"
        onClick={(e) => roll(e)}
        disabled={isRolling}
      >
        ROLL
      </div>
    </div>
  );
}
