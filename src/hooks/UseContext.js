import React, { useState } from 'react';
import Alert from '../Alert/Alert';
import { AlertProvider } from '../Alert/AlertContext';
import '../App.scss';
import Main from '../Main';

function UseContext() {
  return (
    <AlertProvider>
      <div className={'container pt-3'}>
        <Alert />
        <Main toggle={()=>{}} />
      </div>
    </AlertProvider>
  );
}

export default UseContext;
