
/**
 *  @param {Array}array
 */
function findMin(array){
   let min= Number.MAX_VALUE;
   for(const el of array){
    if(el<min)min=el;
   }
   return min;
   
}
const numbers=[x,y,z];
console.log(findMin(numbers));

