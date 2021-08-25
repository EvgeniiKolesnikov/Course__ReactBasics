import React from 'react';
import {useAlert} from './Alert/AlertContext'
export default function Main() {
  const {toggle} = useAlert();
  
  return (
    <>
      <h1>Sample</h1>
      <button onClick={toggle}>Show alert</button>
    </>
  )
}