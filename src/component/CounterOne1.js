import React from 'react'
import useCounter from './useCounter'

function CounterOne1() {
    const [count,increament,decreament,reset] = useCounter()
    
  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>Decreament</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterOne1