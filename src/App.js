import React from 'react';
import './App.css';
// import ChildOne from './component/ChildOne';
import GrandParent from './component/GrandParent';
// import Parent from './component/Parent';
// import ParentOne from './component/ParentOne';


function App() {
  return (
    <div className="App">
      <GrandParent/>
      {/* <Parent/> */}
      {/* <ParentOne>
        <ChildOne/>
      </ParentOne> */}
    </div>
  );
}

export default App;