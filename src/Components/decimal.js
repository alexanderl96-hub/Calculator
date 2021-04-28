
const decimal = value => {
   let ouput = ''
   let decimal = ''
   let neg = false
   if(value.includes('.')){
       ouput = value.substring(0, value.indexOf('.'))
       decimal = value.substring(value.indexOf('.'))
   }else{
       ouput = value
   }
   if(value < 0){
       neg = true
       ouput = ouput.substring(1)
   }
   return neg ? "-" + parseFloat(ouput).toLocaleString() + decimal : parseFloat(ouput).toLocaleString() + decimal
}
export default decimal