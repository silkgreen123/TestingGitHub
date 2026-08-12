

function printNthElement(arr,n){
const result=[];
for(let i=0;i<arr.length;i+=n){
    result.push(arr[i]);
}
return result;
}
printNthElement();