import React, { useRef } from 'react'

import classes from './Car.module.scss';
import Radium from 'radium';
import withClass from '../hoc/withClass';
// import './Car.css';
import PropTypes from 'prop-types';

const Car = (props) => {
  const carInputRef = useRef();

  const style = {
    border: '2px solid #999',
    boxShadow: '2px 2px 1px #ddd',
    ':hover': {
      border: '2px solid #aaa',
      boxShadow: '0 4px 15px 0 rgba(0, 0, 0, 0.25)',
      cursor: 'pointer'
    }
  }

  // const inputClasses = [];
  // if (props.name !== '') {
  //   inputClasses.push('green');
  // } else {
  //   inputClasses.push('red');
  // }
  // if (props.name.length > 4) {
  //   inputClasses.push('bold');
  // }

  let inputColor = null;
  if (props.name !== '') {
    inputColor = 'green';
  } else {
    inputColor = 'red';
  }
  if (props.name.length > 4) {
    inputColor = 'bold';
  }
  console.log(`${classes.input} ${classes[inputColor]}`);

  return (
    <div className={classes.car} style={style}>
      <div>{props.name}</div>
      <div>{props.year}</div>
      <input
        ref={carInputRef}
        type='text'
        style={{ width: '50px' }}
        onChange={props.onChangeName}
        value={props.name}
        // className={inputClasses.join(' ')}
        className={`${classes.input} ${classes[inputColor]}`}
      />
      {/* <button onClick={props.onChangeTitle}>Click</button> */}
      <button onClick={props.onDelete}>Delete</button>
      {props.children}
    </div>
  );
};

Car.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func
}

// export default Radium(Car);
export default withClass(Car, classes['car-container']);