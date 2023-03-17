import React from 'react'
import useInput from './useInput'

function UserForm1() {
    const [firstName,bindFirstName, resetFirstName] = useInput('')
    const [lastName,bindLastName ,resetLastName] = useInput('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
            <label>First Name</label>
            <input type="text" {...bindFirstName}/>
        </div>
        <div>
            <label>last Name</label>
            <input type="text" {...bindLastName}/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UserForm1