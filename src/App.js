import React from 'react';
import './App.css';
import Hello from './Hello';

function App({name, age}) {
  return <div>Hello to App.js from {name} my age is {age - 10}
  <br/>
  <Hello firstName= {name}></Hello>
  </div>
}

export default App;
