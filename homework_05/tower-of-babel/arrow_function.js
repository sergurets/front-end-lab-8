 var inputs = process.argv.slice(2);
 var result = inputs.map((el) => {
     return el[0].toUpperCase()
   })
   .reduce((previousValue, currentValue)=> {
     return previousValue + currentValue;
   });
 console.log(result);