import React from 'react';
import './App.css';
import ClassTimer from './component/ClassTimer';
import HookTimer from './component/HookTimer';
// import FocusInput1 from './component/FocusInput1';

function App() {
  return (
      <div className="App">
        <ClassTimer/>
        <HookTimer/>
        {/* <FocusInput1/> */}
      </div>
  );
}

export default App;