import logo from './logo.svg';
import './App.css';
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";
import Hello from './component/Hello';
import Message from './component/Message';
import Counter from './component/Counter';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList';
import StyleSheet from './component/StyleSheet';
import Inline from './component/Inline';
import './appStyle.css'
import styles from './appStyle.module.css'

function App() {
  return (
    <div className="App">
      <h1 className='error'>error</h1>
      <h1 className={styles.success}>success</h1>
      {/* <Inline/> */}
      {/* <StyleSheet primary={true}/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Greet name="Bruce" heroName="Batman"> */}
      {/* <p>This is children props</p></Greet> */}
      {/* <Greet name="Clark" heroName="Superman"> */}
      {/* <button>Action</button> */}
      {/* </Greet> */}
      {/* <Greet name="Diana" heroName="Wonder Woman"/> */}
      {/* <Welcome name="Bruce" heroName="Batman"/> */}
      {/* <Welcome name="Clark" heroName="Superman"/> */}
      {/* <Welcome name="Diana" heroName="Wonder Woman"/> */}
      {/* <Hello/> */}
    </div>
  );
}

export default App;