import React from 'react';
import './App.css';
import Sphere from './Sphere'
import Tree from './Tree'
import Figures from './Figures'

function App() {
  return (
    <div className="App">
    <Tree className="the-tree"/>
    <Sphere/>
    <Figures/>
    </div>
  );
}

export default App;
