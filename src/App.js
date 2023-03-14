import React, { useReducer } from 'react';
import './App.css';
import DataFetchingOne from './component/DataFetchingOne';
import DataFetchingTwo from './component/DataFetchingTwo';
// import ComponentA from './component/ComponentA';
// import ComponentB from './component/ComponentB';
// import ComponentC from './component/ComponentC';

export const CountContext = React.createContext()

// const initialState = 0
// const reducer = (state, action) => {
//   switch (action) {
//     case 'increament':
//       return state + 1
//     case 'decreament':
//       return state - 1
//     case 'reset':
//       return initialState
//     default:
//       return state
//   }
// }

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState)
  return (
    // <CountContext.Provider value={{ countState: count, countDispatch: dispatch}}>
      <div className="App">
        <DataFetchingTwo/>
        {/* <DataFetchingOne/> */}
        {/* Count - {count} */}
        {/* <ComponentA /> */}
        {/* <ComponentB /> */}
        {/* <ComponentC /> */}
      </div>
    // </CountContext.Provider>
  );
}

export default App;