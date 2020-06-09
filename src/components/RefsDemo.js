import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = (element) =>{
            this.cbRef = element
        }
    }

    componentDidMount(){
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
        if(this.cbRef){
            this.cbRef.focus()
        }
    }

    clickHandler = () =>{
        window.alart(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                <input type = 'text' ref = {this.inputRef} />
                <input type = 'text' ref = {this.cbRef} />
                <button onClick = {this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
