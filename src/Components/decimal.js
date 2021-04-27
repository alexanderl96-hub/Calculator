
const decimal = val  => {
    
 if (val  === "0") return val 
 let output = ""
 let decim = ""
 let num = false
 if(val.includes(".")){
    output  = val.substring(0, val.indexOf("."))
     decim = val.substring(val.indexOf("."))
 }else{
    output = val 
 }
 
 if(val < 0){
    num = true
    output  = output.substring(1)
 }
 return num ? "-" + parseFloat(output ).toLocaleString() + decim : parseFloat(output ).toLocaleString() + decim

}
export default decimal;