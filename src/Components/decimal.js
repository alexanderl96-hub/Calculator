// It'd be a good idea to put this file in `src`.
// Or as part of the component it's used in.
// Or in a `utilities` folder.
// But it probably does not belong in the components folder.
// Because it's not a component!
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

   // Excellent idea to use a ternary here!
   // If you want to make this function even cleaner using ternaries, you could.
   // You probably want the ternary to only focus on the part that's different--the `-`.
   // That way you don't have to repeat the `parseFloat` and `toLocaleString`.
   // The above part could be done using ternaries too... You could set decimal and
   // output to the result of ternaries too and save yourself some ifs and elses!
   return neg ? "-" + parseFloat(ouput).toLocaleString() + decimal : parseFloat(ouput).toLocaleString() + decimal
}
export default decimal
