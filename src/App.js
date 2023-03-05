import React, { Component } from 'react';
import './App.css';
// import FragmentDemo from './component/FragmentDemo';
// import LifeCycleA from './component/LifeCycleA';
// import Table from './component/Table'
// import PureComp from './component/PureComp'
import ParentComp from './component/ParentComp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParentComp/>
        {/* <PureComp/> */}
        {/* <Table/> */}
        {/* <FragmentDemo/> */}
        {/* <LifeCycleA/> */}
      </div>
    );
  }

}

export default App;