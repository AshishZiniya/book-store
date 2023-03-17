import React, { useState } from 'react'
// import {MemoizedChildThree} from './ChildThree'
import {MemoizedChildFour} from './ChildFour'

const ParentThree = ({ children }) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Ashish')

    console.log('Parent Render')
    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Codevolution')}>Change name</button>
            <MemoizedChildFour name={name}/>
            {/* <MemoizedChildThree name={name}>
                Hello
            </MemoizedChildThree> */}
        </div>
    )
}

export default ParentThree