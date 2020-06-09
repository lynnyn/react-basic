import React from 'react'

function Columns() {
    const items = [
        {
            id:1,
            title:'test'
        },{
            id:2,
            title:'clark'
        }
    ]
    return (
        <React.Fragment>
            {
                items.map(item =>(
                    <React.Fragment key = {item.id}>
                        <td className = {item.id}>title</td>
                        <td>{item.title}</td>
                    </React.Fragment>   
                ))
            }
        </React.Fragment>
    )
}

export default Columns
