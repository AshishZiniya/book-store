import React, { Component } from 'react';
import './App.css';
import PostForm from './component/PostForm';
// import PostList from './component/PostList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm/>
        {/* <PostList/> */}
      </div>
    );
  }

}

export default App;