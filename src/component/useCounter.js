import {useState} from 'react'

function useCounter(initailCount = 0, value) {
    const [count, setCount] = useState(initailCount)
    const increament = () => {
        setCount(prevCount => prevCount + value )
    }
    const decreament = () => {
        setCount(prevCount => prevCount - value )
    }
    const reset = () => {
        setCount(0)
    }

    return [count, increament, decreament, reset]
}

export default useCounter