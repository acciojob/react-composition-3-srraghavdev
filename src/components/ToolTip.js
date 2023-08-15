import React,{useState} from 'react'

let ToolTip= (props)=>{
    let [hover,Sethover]=useState(false)
return(
    <div>
       { hover && (<p className='tooltiptext'>{props.text}</p>) }
        <p className='tootip' onMouseOver={()=>Sethover(true)} onMouseOut={()=>Sethover(false)}>{props.child}</p>
    </div>
)
}

export default ToolTip