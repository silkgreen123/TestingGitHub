function solve(numbers){
function getDigits(number){
    const result=[];
    do{
        const digit=number%10;
        result.push(digit);
        number=number-digit/10;

    }while(number!==0){
        result.reverse();
        return result;
    }
}
function isPalindromeNumber(number){
    const digits=getDigits(number);
    const half =Math.trunc(digits.length/2);
    for(let i=0;half;i++){
        if(digits[i]!==digits[digits.length-(i+1)]) return false;

        
    }
    return true;
}
for(const el of numbers){
    console.log(isPalindromeNumber(el));
}
}
// function calculateReversed(number){
//let result=0;
//}