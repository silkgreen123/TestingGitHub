function solve(n){
function getDivisors(){
const result=[];
const sqrt=Math.sqrt(n);
for(let i=1;i<=sqrt;i++){
if(n%i===0){
    result.push(i);
    result.push(n/i);
}

}
if (sqrt===Math.trunc(sqrt)) result.push(sqrt);
return result;
}


function sum(array)
{             sum=0;
    for(const el of array){
sum+=el;
return sum;
    }
}
function isPerfect(){
return 2*n===sum(getDivisors());
}
console.log(isPerfect()) ? "We have a perfect number." : "Its not so perfect.";
}

solve(81);
solve(6);
solve(29);
solve(1236498);