import React, { useState } from 'react'
import {MemoizedChildTwo} from './ChildTwo'

const ParentTwo = ({ children }) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Ashish')

    console.log('Parent Render')
    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Codevolution')}>Change name</button>
            <MemoizedChildTwo name={name}/>
        </div>
    )
}

export default ParentTwo