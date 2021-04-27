import './App.css';
import Buttons from "./Components/Buttons.js"
import React, {useState} from 'react'
import decimal from "./Components/decimal.js"

const App = () => {
  
  
  const[val, setValue] = useState('0')
  const[operator, setOperator]= useState(null)
  const[storenumb, setMemory]= useState(null)
 

  const handleBTN = content =>()=>{
   const value = parseFloat(val)
   console.log(val)
   

    if(content === "A/C"){
     setValue('0')
     setOperator(null)
     setMemory(null)
     return
    }
    if(content === "DEL"){
      setValue(storenumb)
      return
    }
    if(content === "="){
      if(!operator)return
      if(operator === "/"){
        setValue((storenumb / val).toString())
      }else if(operator === "*"){
        setValue((storenumb * val).toString())
      }else if(operator === "-"){
        setValue((storenumb - val).toString())
      }else if(operator === "+"){
        setValue((storenumb + val).toString())
      }
      setMemory(null)
      setOperator(null)
      return 
    }
    if(content === "/"){
      if(!null){
        if(operator === "/"){
          setMemory((storenumb / val))
        }else if(operator === "*"){
          setMemory((storenumb * val))
        }else if(operator === "-"){
          setMemory((storenumb - val))
        }else if(operator === "+"){
          setMemory((storenumb + val))
        }
      }else{
        setMemory(val)
      }
      setMemory(val)
      setValue('0')
      setOperator('/')
      return
    }
    if(content === "*"){
      if(!null){
        if(operator === "*"){
          setMemory((storenumb * val))
        }else if(operator === "/"){
          setMemory((storenumb / val))
        }else if(operator === "-"){
          setMemory((storenumb - val))
        }else if(operator === "+"){
          setMemory((storenumb + val))
        }
      }else{
        setMemory(val)
      }
      setMemory(val)
      setValue('0')
      setOperator('*')
      return
    }

    if(content === "-"){
      if(!null){
        if(operator === "-"){
          setMemory((storenumb - val))
        }else if(operator === "/"){
          setMemory((storenumb / val))
        }else if(operator === "*"){
          setMemory((storenumb * val))
        }else if(operator === "+"){
          setMemory((storenumb + val))
        }
      }else{
        setMemory(val)
      }
      setMemory(val)
      setValue('0')
      setOperator('-')
      return
    }

    if(content === "+"){
      if(!null){
        if(operator === "+"){
          setMemory((storenumb + val))
        }else if(operator === "/"){
          setMemory((storenumb / val))
        }else if(operator === "*"){
          setMemory((storenumb * val))
        }else if(operator === "-"){
          setMemory((storenumb - val))
        }
      }else{
        setMemory(val)
      }
      setMemory(val)
      setValue('0')
      setOperator('+')
      return
    }

    if(content === "+/-"){
      setValue((val * -1).toString())
      return
    }
    if(content === "%"){
      setValue((val /100).toString())
      setMemory(val)
      return
    }
    if(content === "."){
      if(val.includes('.'))return
      setValue(val + '.')
      return
    }

    if(val[val.length - 1]=== "."){
     setValue(val + content)
    }else{
      setValue(parseFloat(value + content).toString())
      
    }
    


  }

  return (
    <div>
      <div className="App">
        <div className="display">{decimal(val)}</div>
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
        <div className="display">{storenumb}{operator}</div>
      </div>
      
    </div>
    
  );
}

export default App;
