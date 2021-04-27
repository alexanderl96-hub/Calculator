const decimal = val => {
 if (val === "0") return val
 let display = ""
 let decim = ""
 if(val.includes(".")){
     display = val.substring(0, val.indexOf("."))
     decim = val.substring(val.indexOf("."))
 }
}
export default decimal