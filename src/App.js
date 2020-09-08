import React from 'react';
import Calculator from './Calculator.jsx';

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <h1>NBA 2K21 MyTeam Budget Calculator</h1>
        <h6>A simple tool to see how much MT per game your squad would cost you</h6>
      </header>
      <Calculator />
      <footer>
        <small>Created by Andri Ólafsson - View on <a href="https://github.com/andrio12/mt-budget">github</a></small>
      </footer>
    </div>
  );
}

export default App;
