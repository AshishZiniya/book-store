import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
    render() {
        const { count, increamentCount } = this.props
        return (
            <div>
                <h2 onMouseOver={increamentCount}>Hover {count} times</h2>
            </div>
        )
    }
}

export default withCounter(HoverCounter, 10)