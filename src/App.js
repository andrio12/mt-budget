import React from 'react';
import Calculator from './Calculator.jsx';

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <h1>MyTeam Budget Calculator</h1>
      </header>
      <Calculator name="Andri Olafsson" />
    </div>
  );
}

export default App;
