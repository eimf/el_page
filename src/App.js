import React from 'react';
import './App.css';
import Sphere from './Sphere'
import Tree from './Tree'
import Figures from './Figures'
import Think from './Think'
import TheSymbol from './Symbol'
import Speech from './Speech'

function App() {
  return (
    <div className="App">
      <Tree/>
      <Sphere/>
      <Figures/>
      <Think/>
      <TheSymbol/>
      <Speech/>
    </div>
  );
}

export default App;
