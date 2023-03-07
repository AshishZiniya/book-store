import React, { Component } from 'react';
import './App.css';
import ClickCounterTwo from './component/ClickCounterTwo';
import Counter1 from './component/Counter1';
import HoverCounterTwo from './component/HoverCounterTwo';
// import User from './component/User';
// import ClickCounter from './component/ClickCounter';
// import HoverCounter from './component/HoverCounter';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter1>{(count, increamentCount) => <ClickCounterTwo count={count} increamentCount={increamentCount}/>}</Counter1>
        <Counter1>{(count, increamentCount) => <HoverCounterTwo count={count} increamentCount={increamentCount}/>}</Counter1>
        {/* <ClickCounterTwo/>
        <HoverCounterTwo/>
        <User render={(isLoggedIn) => isLoggedIn ? 'Ashish' : 'Guest'}/> */}
        {/* <ClickCounter name='Ashish'/>
        <HoverCounter/> */}
      </div>
    );
  }

}

export default App;