import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        return this.state.isLoggedIn && <div>Welcome Ashish</div>

        // return (
        //     this.state.isLoggedIn ?
        //         (<div>Welcome Ashish</div>) :
        //         (<div>Welcome Guest</div>)
        // )

        // let Message
        // if (this.state.isLoggedIn) {
        //     Message = <div>Welcomne Ashish</div>
        // } else {
        //     Message= <div>Welcome Guest</div>
        // }

        // return <div>{Message}</div>

        // if (this.state.isLoggedIn) {
        //     return (<div>Welcome Ashish</div>)
        // }
        // else {
        //     return (<div>Welcome Guest</div>)
        // }
        // return (
        //   <div>
        //     <div>Welcome Ashish</div>
        //     <div>Welcome Guest</div>
        //   </div>
        // )
    }
}

export default UserGreeting
