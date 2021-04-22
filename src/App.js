import './App.css';
import Buttons from "./Components/Buttons.js"
// import React, {useState} from 'react'

const App = () => {
  
  
  // const[value, setValue] = useState('0')
  const handleBTN = content =>()=>{
  //  console.log('gracias', content)
   const val = content
  //  this.setState({
  //    value: val
  //  })
   console.log(val)
  }
  return (
    <div className="App">
      <div className="display">hola </div>
      <div className="buttons">
      <Buttons  onBTNClick={handleBTN} content="A/C" type='function'/>
      <Buttons onBTNClick={handleBTN} content="+/-" type='function'/>
      <Buttons  onBTNClick={handleBTN} content="%"  type='function' />
      <Buttons onBTNClick={handleBTN} content="/"   type='operators'/>
      <Buttons onBTNClick={handleBTN} content="7"/>
      <Buttons onBTNClick={handleBTN} content="8"/>
      <Buttons onBTNClick={handleBTN} content="9"/>
      <Buttons onBTNClick={handleBTN} content="*"   type='operators'/>
      <Buttons onBTNClick={handleBTN} content="4"/>
      <Buttons onBTNClick={handleBTN} content="5"/>
      <Buttons onBTNClick={handleBTN} content="6"/>
      <Buttons onBTNClick={handleBTN} content="-"   type='operators' />
      <Buttons onBTNClick={handleBTN} content="1"/>
      <Buttons onBTNClick={handleBTN} content="2"/>
      <Buttons onBTNClick={handleBTN} content="3"/>
      <Buttons onBTNClick={handleBTN} content="+"   type='operators'/>
      <Buttons onBTNClick={handleBTN} content="DEL" type='function'/>
      <Buttons onBTNClick={handleBTN} content="0"/>
      <Buttons onBTNClick={handleBTN} content="."/>
      <Buttons onBTNClick={handleBTN} content="="   type='operators' />
      </div>
      
    </div>
  );
}

export default App;
