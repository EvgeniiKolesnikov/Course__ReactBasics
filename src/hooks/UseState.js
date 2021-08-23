import React, { useState } from 'react';

import '../App.scss';

function computeInitialCounters() {
  console.log('computeInitialCounters');
  return Math.floor(Math.random() * 20);
}

function UseState() {
  const [counter, setCounter] = useState(() => computeInitialCounters());
  const [state, setState] = useState({
    title: 'Counter',
    date: Date.now(),
  });

  function increment() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  function decrement() {
    setCounter((prevCounter) => prevCounter - 1);
  }

  function updateTitle() {
    setState((prevState) => {
      return {
        ...prevState,
        title: 'Changed title',
      };
    });
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment} className='btn btn-success m-1'>
        Add
      </button>
      <button onClick={decrement} className='btn btn-danger m-1'>
        Delete
      </button>
      <button onClick={updateTitle} className='btn btn-warning m-1'>
        Change name
      </button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default UseState;
