function swapElements(array){
for(let i=0;i<array.length/2;i++){
   swapTwoElements(array,i,array.length-1-i);
}
}
function swapTwoElements(array,i,j){
let temp=array[i];
array[i]=array[j];
temp=array[j];

}