import React, { Component } from 'react';
import './App.css';
// import HookMouse from './component/HookMouse';
import MouseContainer from './component/MouseContainer';
// import ClassMouse from './component/ClassMouse';
// import ClassComponentOne from './component/ClassComponentOne';
// import HookCounterOne from './component/HookCounterOne';
// import HookCounterFour from './component/HookCounterFour';
// import HookCounterThree from './component/HookCounterThree';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <HookMouse/> */}
        <MouseContainer/>
        {/* <ClassMouse/> */}
        {/* <ClassComponentOne/> */}
        {/* <HookCounterOne/> */}
        {/* <HookCounterFour/> */}
        {/* <HookCounterThree/> */}
      </div>
    );
  }

}

export default App;