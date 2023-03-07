import React, { Component } from 'react';
import './App.css';
import ComponentC from './component/ComponentC';
import { UserProvider } from './component/UserContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProvider value="Ashish">
          <ComponentC />
        </UserProvider>
      </div>
    );
  }

}

export default App;