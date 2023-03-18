import React from 'react';
import './App.css';
import { ChildA } from './component/ContextChild';
import ContextParent from './component/ContextParent';

function App() {
  return (
    <div className="App">
      <ContextParent>
        <ChildA/>
      </ContextParent>
    </div>
  );
}

export default App;