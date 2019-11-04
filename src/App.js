import React from 'react';
import Calculator from './Calculator.jsx';

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <h1>NBA 2K20 MyTeam Budget Calculator</h1>
        <h6>A simple tool to see how much MT per game your squad would cost you</h6>
      </header>
      <Calculator name="Andri Olafsson" />
    </div>
  );
}

export default App;
