import React from 'react';
// import logo from './logo.svg';
import './App.css';
import IconButton from './components/IconButton/IconButton';
import ButtonConnector from './components/ButtonConnector/ButtonConnector';
import Path, { type ButtonDefinition } from './components/Path/Path';

/* If icon will have "real" ids it could be replaced. */
function generateButtonsData(start: number, end: number = 0): Array<ButtonDefinition> {
  return Array.from(Array(end - start).keys()).map((id) => {
    const newId = id + start;

    return {
      id: `icon${newId}`,
      iconPositionInFile: newId
    }
  });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Path 
          buttonsDefinition={ generateButtonsData(0, 4) }
          enabledButtons={[]}
          possibilityToAdd={true}
        />
        <Path
          buttonsDefinition={generateButtonsData(4, 8)}
          enabledButtons={[]}
          possibilityToAdd={true}
        />
      </header>
    </div>
  );
}

export default App;
