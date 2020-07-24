import React, { useState, useEffect } from 'react';
import Die from './die';
import './styles.scss';

const gimmeDots = (n) => {
  let buttonsArr = [];
  for (let index = 0; index < n; index++) {
    buttonsArr.push({ id: index, active: false });
  }

  return buttonsArr;
};

export default function App() {
  const handleClick = (c) => {
    console.log('i be clicked', c);
  };

  return (
    <div className="board">
      <div className="box">
        <Die />
      </div>
    </div>
  );
}
