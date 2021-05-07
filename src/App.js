import React, {useState} from 'react';
import './App.css';
import Buttons from './Components/Buttons';
import decimal from "./Components/decimal"



const App =()=> {
  
  const [val, setValue] = useState('0');  
  const [stored, setMemory] = useState(null)
  const [operator, setOperator]= useState(null)
   
  const handleBTN = content => () =>{
   
    const number = parseFloat(val)

    if(content === "AC"){
      setValue('0') 
      setMemory(null)
      setOperator(null)
      return
    }
    if(content === 'DEL'){
      if(stored === val){
        setValue(val)
        return
      } 
      
      
    }
    if(content === "+/-" ){
        setValue((number * -1).toString())
     return 
    }
    if(content === "%"){
      setValue((number / 100).toString())
      setMemory(null)
      setOperator(null) 
      return
    }
    if(content === "."){
      if(val.includes('.'))return
      setValue(val + ".")
      return
    }
    if(content === "/"){
      if(operator !== null){
        if(operator === "/"){
          setMemory((stored / parseFloat(val)))
        }else if(operator === "*"){
          setMemory((stored * parseFloat(val)))
        }else if(operator === "-"){
          setMemory((stored - parseFloat(val)))
        }else if(operator === "+"){
          setMemory((stored + parseFloat(val)))
        }
      }else{
        setMemory(parseFloat(val))
      }
      setMemory(parseFloat(val))
      setValue('0')
      setOperator("/")
      return
    }

    if(content === "*"){
      if(operator !== null){
        if(operator === "*"){
          setMemory((stored / parseFloat(val)))
        }else if(operator === "/"){
          setMemory((stored * parseFloat(val)))
        }else if(operator === "-"){
          setMemory((stored - parseFloat(val)))
        }else if(operator === "+"){
          setMemory((stored + parseFloat(val)))
        }
      }else{
        setMemory(parseFloat(val))
      }
      setMemory(parseFloat(val))
      setValue('0')
      setOperator("*")
      return
    }
    if(content === "-"){
      if(operator !== null){
        if(operator === "-"){
          setMemory((stored / parseFloat(val)))
        }else if(operator === "*"){
          setMemory((stored * parseFloat(val)))
        }else if(operator === "/"){
          setMemory((stored - parseFloat(val)))
        }else if(operator === "+"){
          setMemory((stored + parseFloat(val)))
        }
      }else{
        setMemory(parseFloat(val))
      }
      setMemory(parseFloat(val))
      setValue('0')
      setOperator("-")
      return
    }
    if(content === "+"){
      if(operator !== null){
        if(operator === "+"){
          setMemory((stored / parseFloat(val)))
        }else if(operator === "*"){
          setMemory((stored * parseFloat(val)))
        }else if(operator === "-"){
          setMemory((stored - parseFloat(val)))
        }else if(operator === "/"){
          setMemory((stored + parseFloat(val)))
        }
      }else{
        setMemory(parseFloat(val))
      }
      setMemory(parseFloat(val))
      setValue('0')
      setOperator("+")
      return
    }
    if(content === "="){
      if(!operator)return

      if(operator === "/"){
        setValue((stored / parseFloat(val)).toString())
      }else if(operator === "*"){
        setValue((stored * parseFloat(val)).toString())
      }else if(operator === "-"){
        setValue((stored - parseFloat(val)).toString())
      }else if(operator === "+"){
        setValue((stored + parseFloat(val)).toString())
      }
      
      setMemory(null)
      setOperator(null)
      return
    }

    if(val[val.length -1]=== "."){
      setValue(val + content)
    }else{
      setValue(parseFloat(number + content).toString())
    }
    
  }

  
  return ( 
    <div className="App">
      <div>
        {/* <div className="time">{time.getHours()}:{time.getMinutes()}</div> */}
      </div>
      <div className="top">My calculator</div>
      <div className="display" >{decimal(val)}</div>
      <div className="buttons">
        <Buttons onBTNClick={handleBTN} content='AC'  type="function"/>
        <Buttons onBTNClick={handleBTN} content='+/-' type="function"/>
        <Buttons onBTNClick={handleBTN} content='%'   type="function"/>
        <Buttons onBTNClick={handleBTN} content='/'   type="operators"/>
        <Buttons onBTNClick={handleBTN} content='7'/>
        <Buttons onBTNClick={handleBTN} content='8'/>
        <Buttons onBTNClick={handleBTN} content='9'/>
        <Buttons onBTNClick={handleBTN} content='*'  type="operators"/>
        <Buttons onBTNClick={handleBTN} content='4'/>
        <Buttons onBTNClick={handleBTN} content='5'/>
        <Buttons onBTNClick={handleBTN} content='6'/>
        <Buttons onBTNClick={handleBTN} content='-'  type="operators"/>
        <Buttons onBTNClick={handleBTN} content='1'/>
        <Buttons onBTNClick={handleBTN} content='2'/>
        <Buttons onBTNClick={handleBTN} content='3'/>
        <Buttons onBTNClick={handleBTN} content='+'  type="operators"/>
        <Buttons onBTNClick={handleBTN} content='DEL'  type="function"/>
        <Buttons onBTNClick={handleBTN} content='0'/>
        <Buttons onBTNClick={handleBTN} content='.'/>
        <Buttons onBTNClick={handleBTN} content='='  type="function"/>
      </div>
      <div className="Call">{stored}</div>
    </div>
  );
  
}


export default App