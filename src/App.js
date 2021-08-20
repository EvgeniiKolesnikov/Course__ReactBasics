import React, { useState } from 'react';
import './App.scss';
import Car from './Car/Car';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

const cars = [
  { name: 'BMW', year: 2000 },
  { name: 'Mersedes', year: 2005 },
  { name: 'Audi', year: 2010 },
];

function App(props) {
  const [car, setCar] = useState(cars);
  const [title, setTitle] = useState('React Cars');
  const [showCars, setShowCars] = useState(true);

  function changeTitleHandler(newTitle) {
    setTitle((_value) => newTitle);
  }

  function onChangeName(name, index) {
    console.log(name, index);

    // const newCars = [...car];
    // newCars[index].name = name;
    // setCar((value) => newCars);

    setCar((value) => {
      const newCars = [...value];
      newCars[index].name = name;
      return newCars;
    });
  }

  function deleteHandler(index) {
    const newCars = car.concat();
    newCars.splice(index, 1);
    setCar(newCars);
  }

  function toggleHandler() {
    setShowCars((value) => !value);
  }

  function inputHandler(e) {
    console.log('Changed', e.target.value);
    setTitle((_value) => e.target.value);
  }

  let carForm = null;
  if (showCars) {
    carForm = car.map((car, index) => (
      <ErrorBoundary key={index}>
        <Car
          name={car.name}
          year={car.year}
          // onChangeTitle={changeTitleHandler.bind(this, car.name)}
          // тоже самое
          // onChangeTitle={() => changeTitleHandler(car.name)}
          onChangeName={(e) => onChangeName(e.target.value, index)}
          onDelete={deleteHandler.bind(this, index)}
        />
      </ErrorBoundary>
    ));
  }

  return (
    <div className='App' style={{ textAlign: 'center' }}>
      {/* <h3>{title}</h3> */}

      <h3>{props.titleText}</h3>

      {/* <Car name={'Ford'} year={'2015'} />
        <Car name='Audi' year={2017} />
        <Car name='Mers' year={2019} /> */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <input type='text' placeholder='new title' onChange={inputHandler} />
        <button onClick={changeTitleHandler.bind(this, ' Title')}>
          Change title
        </button>
        <button onClick={toggleHandler}>On/Off</button>
      </div>
      <div>{carForm}</div>
    </div>
  );
}

export default App;
