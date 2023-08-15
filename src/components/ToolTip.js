import React,{useState} from 'react'

let ToolTip= (props)=>{
    let [hover,Sethover]=useState(false)
return(
    <div>
       { hover && (<h2 className='tooltiptext'><div>{props.text}</div></h2>) }
        <p className='tootip' onMouseOver={()=>Sethover(true)} onMouseOut={()=>Sethover(false)}><div>{props.child}</div></p>
    </div>
)
}

export default ToolTip