import React from 'react'

const Scroll = (props) => {
    
    console.log("The number of children is: ", React.Children.count(props.children)); 
    
    return (
        
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '500px', marginLeft: '20px', marginRight: '20px'}}>
            {props.children}
        </div>
    )
}


export default Scroll;