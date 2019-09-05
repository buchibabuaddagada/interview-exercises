import React from 'react';
import BarGraph from './BarGraph/index';
import graphdata from './data/data.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Coding Challenge</h3>
        {/* Load the Graph data from JSON and pass in BarGraph Component to render */}
        <BarGraph graphData={graphdata}></BarGraph>
      </header>
    </div>
  );
}

export default App;
