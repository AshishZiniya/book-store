import React from 'react'
import useCounter from './useCounter'

function CounterTwo1() {
    const [count,increament,decreament,reset] = useCounter(10, 10)

  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>Decreament</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterTwo1