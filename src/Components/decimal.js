import React from "react"
const decimal = val  => {
    
 if (val  === "0") return val 
 let display = ""
 let decim = ""
 let num = false
 if(val.includes(".")){
     display = val.substring(0, val.indexOf("."))
     decim = val.substring(val.indexOf("."))
 }else{
     display= val 
 }
 
 if(parseFloat(val )  < 0){
    num = true
    display = display.substring(1)
 }
 return num
 ? "-" + parseFloat(display).toLocaleString()+ decim
 : parseFloat(display).toLocaleString()+ decim

}
export default decimal