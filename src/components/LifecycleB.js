import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'lynn'
        }
        console.log('lifecycleB a constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('lifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('lifecycleB componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('lifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('lifecycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('lifecycleB componentDidUpdate')
    }
    
    render() {
        console.log('lifecycleB render')
        return (
            <div>
                lifecycleB
            </div>
        )
    }
}

export default LifecycleB
