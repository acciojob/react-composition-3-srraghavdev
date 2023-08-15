
import React from "react";
import './../styles/App.css';
import ToolTip from './ToolTip.js'

const App = () => {
  return (
    <div>
        <ToolTip text={'This is a tooltip'} child={'Hover over me'}/>
        <ToolTip text={'This is another tooltip'} child={'Hover over me to see another tooltip'}/>
    </div>
  )
}

export default App
