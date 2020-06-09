import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'lynn'
        }
        console.log('lifecyclA a constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('lifecyclA  getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('lifecyclA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('lifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('lifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('lifecycleA componentDidUpdate')
    }
    

    changeState = () =>{
        this.setState({
            name: 'test'
        })
    }
    render() {
        console.log('lifecyclA  render')
        return (
            <div>
                <div>LifecyleA</div>
                <button onClick = {this.changeState}>Change state</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
