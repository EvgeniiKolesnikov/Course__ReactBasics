import React, { useEffect, useState } from 'react';
import '../App.scss';

function UseEffect() {
  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0, y: 0
  })

  // console.log('Component render');

  useEffect(() => {
    console.log('Type changed', type);
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));

    return () => {
      // console.log('clear type useEffect');
    }
  }, [type]);

  const mouseMoveHandler = e => {
    setPos({ x: e.clientX, y: e.clientY})
  }

  useEffect(() => {
    console.log('СomponentDidMount? - useEffect');
    window.addEventListener('mousemove', mouseMoveHandler);
    return () => window.removeEventListener('mousemove', mouseMoveHandler)
  }, [])

  return (
    <div>
      <h1>Resource: {type}</h1>
      <button onClick={() => setType('users')}>Users</button>
      <button onClick={() => setType('todos')}>Todos</button>
      <button onClick={() => setType('posts')}>Posts</button>

      <pre>{JSON.stringify(pos, null, 2)}</pre>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default UseEffect;
