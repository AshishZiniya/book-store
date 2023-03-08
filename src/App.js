import React, { Component } from 'react';
import './App.css';
// import HookCounter from './component/HookCounter';
import HookCounterTwo from './component/HookCounterTwo';
// import ClassCounter from './component/ClassCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HookCounterTwo/>
        {/* <ClassCounter/> */}
      </div>
    );
  }

}

export default App;