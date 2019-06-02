import React from 'react';
import './App.css';
import Sphere from './Sphere'
import Tree from './Tree'
import Figures from './Figures'
import Think from './Think'
import TheSymbol from './Symbol'

function App() {
  return (
    <div className="App">
    <Tree className="the-tree"/>
    <Sphere/>
    <Figures/>
    <Think/>
    <TheSymbol/>
    </div>
  );
}

export default App;
