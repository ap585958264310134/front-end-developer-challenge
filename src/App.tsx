import React from 'react';
import './App.css';
import Paths from './components/Paths/Paths';
import CalculatorContainer from './components/CalculatorContainer/CalculatorContainer';
import Title from './components/Title/Title';

function App() {
  return (
    <CalculatorContainer>
      <Title 
        text="TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000"
      />
      <Paths />
    </CalculatorContainer>
  );
}

export default App;
