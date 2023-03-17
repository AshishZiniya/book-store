import React, { useState } from 'react'

const initState = {
    fname: 'Monank',
    lname: 'Sojitra'
}

const ObjectUseState = () => {

    const [person, setPerson] = useState(initState)

    const changeName = () => {
        // person.fname = 'Ashish'
        // person.lname = 'Ziniya'
        // setPerson(person)

        const newPerson = {...person}
        newPerson.fname = 'Ashish'
        newPerson.lname = 'Ziniya'
        setPerson(newPerson)
    }

    console.log('ObjectUseState Render')

  return (
    <div>
      <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}

export default ObjectUseState