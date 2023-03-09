import React, { Component } from 'react';
import './App.css';
import DataFetching from './component/DataFetching';
// import IntervalClassCounter from './component/IntervalClassCounter';
// import IntervalHookCounter from './component/IntervalHookCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DataFetching/>
        {/* <IntervalClassCounter/> */}
        {/* <IntervalHookCounter/> */}
      </div>
    );
  }

}

export default App;