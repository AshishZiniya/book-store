/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useCallback } from 'react'
// import {MemoizedChildThree} from './ChildThree'
import {MemoizedChildFive} from './ChildFive'

const ParentThree = ({ children }) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Ashish')

    const person = {
        fname: 'Ashish',
        lname: 'Ziniya'
    }

    const memoizedPerson = useMemo(() => person, [])

    const memoizedhandleClick = useCallback(handleClick, [])

    const handleClick = () => {}

    console.log('Parent Render')
    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Codevolution')}>Change name</button>
            {/* <MemoizedChildFive name={name} person={memoizedPerson} handleClick={handleClick}/> */}
            <MemoizedChildFive name={name} person={memoizedPerson} handleClick={memoizedhandleClick}/>
            {/* <MemoizedChildThree name={name}>
                Hello
            </MemoizedChildThree> */}
        </div>
    )
}

export default ParentThree