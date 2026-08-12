function ReverseArray(n,arr){
let finalArr=arr.slice(0,n)
.reverse();
console.log(finalArr.join(' '));
}
ReverseArray(3,[10,20,30,40,50]);