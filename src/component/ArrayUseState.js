import React, { useState } from 'react'

const initState = ['Jack', 'Sparrow']

const ArrayUseState = () => {
    const [persons, setPersons] = useState(initState)

    const handleClick = () => {
        // persons.push('Ashish')
        // persons.push('Clark')
        // setPersons(persons)

        const newPersons = {...persons}
        newPersons.fname = 'Ashish'
        newPersons.lname = 'Ziniya'
        setPersons(newPersons)
    }

    console.log('ArrayUseState Render')
    return (
        <div>
            <button onClick={handleClick}>Click</button>
            {
                persons.map((person) => (
                    <div key={person}>{person}</div>
                ))
            }
        </div>
    )
}

export default ArrayUseState