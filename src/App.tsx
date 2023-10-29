import './App.css';
import CalculatorContainer from './components/CalculatorContainer/CalculatorContainer';
import CounterContainer from './components/CounterContainer/CounterContainer';
import Paths from './components/Paths/Paths';
import Title from './components/Title/Title';

function App() {
  return (
    <CalculatorContainer>
      <Title 
        text="TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000"
      />
      <Paths />
      <CounterContainer />
    </CalculatorContainer>
  );
}

export default App;
