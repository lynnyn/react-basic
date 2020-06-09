import React, { Component } from 'react'

class RegComp extends Component {
    render() {
        console.log('reg render')
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegComp
