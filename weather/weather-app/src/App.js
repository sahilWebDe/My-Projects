// App.js
import React from 'react';
import Weather from './weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='title'>Weather App</h1>
      <h3>Enter the City or Country name below to get Live Weather:</h3>
      <Weather/>
    </div>
  );
}

export default App;
