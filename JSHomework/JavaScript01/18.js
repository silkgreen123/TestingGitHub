function solve(start,end){
    let sequance="";
    let sum=0;
for(let i=start;i<=end;i++){
    sequance+='${i}+ ';
    sum+=i;
    
    
}
console.log(sequance);

console.log(sum);
}