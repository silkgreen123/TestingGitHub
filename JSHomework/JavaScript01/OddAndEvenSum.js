function solve(number){

function getDigits(number){
    const result=[];
    while(number!==0){
const digit=number%10;
result.push(digit);
number=(number-digit)/10;
    }
    result.reverse();
    return result;
}
const digits=getDigits(number);
let even=0;
let odd=0;
for(const el of digits){
    if(el%2===0){
        even+=el;
    }else{
        odd+=el;
    }

}
console.log(`Odd sum = ${odd}, Even sum = ${even}`);

}