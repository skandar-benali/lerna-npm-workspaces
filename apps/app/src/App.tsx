import React from 'react';
import './App.css';
const { randomToTen }  = require("random");
const logger = require("logger");
const re = require("reXporter");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        random === {randomToTen()}
        </div>
          <div>
              inside package call random === {re()}
          </div>
        <button onClick={() => logger.info("this is an info message")}>info</button><br/>
        <button onClick={() => logger.error("this is an error message!!!!!!!")}>error</button>
      </header>
    </div>
  );
}

export default App;
