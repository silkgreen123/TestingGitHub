function printAndSum(num1,num2){
    let sequance="";
    let sum=0;
for (let i=num1; i<=num2; i++){
sequance+=`${i} `;
sum+=i;
}

console.log(sequance);
console.log(`Sum: ${sum}`);
}
printAndSum(0,26)