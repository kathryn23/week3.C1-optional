 function mssgNums(intArray){

    if (typeof intArray === 'string') {
         return 'invalid input';
     } 
      else if (typeof intArray === 'boolean'){
           return 'invalid input'
      }
      else{
          var missing = [];
          for (var num = 0, targetValue = intArray[0]; 
               targetValue <= intArray[intArray.length - 1]; targetValue++){

              if (intArray[num] != targetValue){
                   missing.push(targetValue);
              }else{
                    num++;
              }}}return missing;
          }
//console.log(mssgNums([-3, -2, 1, 2, 5, 7, 8, 9]));
module.exports = mssgNums;