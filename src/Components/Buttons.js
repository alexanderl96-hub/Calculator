import React from 'react'
import "./Buttons.css"

const Buttons = ({content, onBTNClick, type})=>{
 return(
     <div className={`Button  ${ type || ''}`} onClick={onBTNClick(content)}>{content}
     </div>
 )
}
export default Buttons