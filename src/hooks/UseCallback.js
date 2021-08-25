import React, { useState, useCallback } from 'react';

import '../App.scss';
import ItemsList from '../ItemsList';

function UseCallback() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? 'lightgreen' : 'red',
  };

  const generateItemsFromAPI = useCallback((number) => {
    return new Array(count)
      .fill('')
      .map((_item, index) => `Elem ${index + number}`);
  }, [count]);

  return (
    <>
      <h1 style={styles}>Count of elements: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Add Elem</button>
      <button onClick={() => setColored((prev) => !prev)}>Change color</button>
      <ItemsList getItems={generateItemsFromAPI} />
    </>
  );
}

export default UseCallback;
