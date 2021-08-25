import React, { useEffect, useState } from 'react';
import '../App.scss';

function useLogger(value) {
  useEffect(() => {
    console.log('Value changed: ', value);
  }, [value]);
}

function useInput(initValue) {
  const [value, setValue] = useState(initValue);

  const onChange = (e) => setValue(e.target.value);
  const clear = () => setValue('');

  // return {value, onChange}
  return {
    bind: { value, onChange },
    value,
    onChange,
    clear,
  };
}

function UseOther() {
  const input = useInput('');
  const lastName = useInput('');

  useLogger(input.value);

  return (
    <div className='container pt-3'>
      
      {/* <input type='text' {...input} /> */}
      <input type='text' {...input.bind} />
      <button onClick={() => input.clear()}>Clear</button>
      <h1>{input.value}</h1>

      <input type='text' value={lastName.value} onChange={lastName.onChange} />
      <h1>{lastName.value}</h1>

    </div>
  );
}

export default UseOther;
