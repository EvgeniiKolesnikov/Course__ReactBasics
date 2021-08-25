import React, { useState, useMemo, useEffect } from 'react';

import '../App.scss';

function complexCompute(num) {
  console.log('complexCompute: ', complexCompute);
  let i = 0;
  while (i < 1000000000) i++;
  return num * 2;
}

function UseMemo() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  // const styles = {
  //   color: colored ? 'lightgreen' : 'red',
  // }

  const styles = useMemo(() => {
    return {
      color: colored ? 'lightgreen' : 'red',
    };
  }, [colored]);

  const computed = useMemo(() => complexCompute(number), [number]);

  useEffect(() => {
    console.log('Styles changed');
  }, [styles]);

  return (
    <>
      <h1 style={styles}>Calculated property: {computed}</h1>
      <button
        className={'btn btn-success'}
        onClick={() => setNumber((prev) => prev + 1)}
      >
        Add
      </button>
      <button
        className={'btn btn-danger'}
        onClick={() => setNumber((prev) => prev - 1)}
      >
        Delete
      </button>
      <button
        className={'btn btn-warning'}
        onClick={() => setColored((prev) => !prev)}
      >
        Change
      </button>
    </>
  );
}

export default UseMemo;
