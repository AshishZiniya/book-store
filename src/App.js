import React, { Component } from 'react';
import './App.css';
import Hero from './component/Hero';
// import PortalDemo from './component/PortalDemo';
// import FRParentInput from './component/FRParentInput';
// import FocusInput from './component/FocusInput';
// import RefsDemo from './component/RefsDemo';
// import FragmentDemo from './component/FragmentDemo';
// import LifeCycleA from './component/LifeCycleA';
// import Table from './component/Table'
// import PureComp from './component/PureComp'
// import ParentComp from './component/ParentComp';
import ErrorBoundary from './component/ErrorBoundary';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Hero heroName={'Batman'} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName={'Superman'} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName={'jocker'} />
        </ErrorBoundary>
        {/* <PortalDemo/> */}
        {/* <FRParentInput/> */}
        {/* <FocusInput/> */}
        {/* <RefsDemo/> */}
        {/* <ParentComp/> */}
        {/* <PureComp/> */}
        {/* <Table/> */}
        {/* <FragmentDemo/> */}
        {/* <LifeCycleA/> */}
      </div>
    );
  }

}

export default App;