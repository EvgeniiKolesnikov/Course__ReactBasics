import React from 'react';
import {useAlert} from './Alert/AlertContext'
export default function Main() {
  const {show} = useAlert();
  
  return (
    <>
      <h1>Sample</h1>
      <button onClick={()=> show('Text from Main.js')}>Show alert</button>
    </>
  )
}