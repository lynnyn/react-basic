import React, { Component } from 'react'
import ComponentF from './ComponentF'
import  UserContext from './userContext'

class ComponentE extends Component {

    static contexType = UserContext

    render() {
        return (
            <div>
                <ComponentF />
            </div>
        )
    }
}



export default ComponentE
