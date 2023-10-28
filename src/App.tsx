import React from 'react';
import './App.css';
import Paths from './components/Paths/Paths';
import CalculatorContainer from './components/CalculatorContainer/CalculatorContainer';

function App() {
  return (
    <CalculatorContainer>
      <Paths />
    </CalculatorContainer>
  );
}

export default App;
