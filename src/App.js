import React, { useState } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import About from './About/About';
import './App.scss';
import Car from './Car/Car';
import CarDetail from './CarDetail/CarDetail';
import Cars from './Cars/Cars';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

import Layout from './hoc/Layout/Layout'
import Quiz from './containers/Quiz/Quiz'
import QuizList from './containers/QuizList/QuizList'
import Auth from './containers/Auth/Auth'
import QuizCreator from './containers/QuizCreator/QuizCreator'

const cars = [
  { name: 'BMW', year: 2000 },
  { name: 'Mersedes', year: 2005 },
  { name: 'Audi', year: 2010 },
];

function App(props) {
  const [car, setCar] = useState(cars);
  const [title, setTitle] = useState('React Cars');
  const [showCars, setShowCars] = useState(true);
  const [login, setLogin] = useState(false);
  
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
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName={'wfm-active'}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about' activeStyle={{color: 'blue'}}>About</NavLink>
          </li>
          <li>
            <NavLink to={{
              pathname: '/cars',
              search: '?a=1&b=2',
              hash: 'wfm-hash'}}>Cars</NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <button onClick={() => setLogin(true)}>Login</button>
      <hr />
      <Switch>
        <Route path='/' exact render={() => <h1>Home</h1>} />
        {login && <Route path='/about' component={About} />}
        <Route path='/cars/:name' component={CarDetail} />
        <Route path='/cars' component={Cars} />
        {/* <Route render={() => <h1>Error 404</h1>} /> */}
        {/* <Redirect to='/' /> */}
      </Switch>
      {/* <About />
      <div>{carForm}</div> */}
      <Layout>
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/quiz-creator" component={QuizCreator} />
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="/" component={QuizList} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
