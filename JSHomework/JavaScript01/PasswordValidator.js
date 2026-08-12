function solve(password){
function validate(password){
    const errors=[];
    if(password< 6 || password > 10) {
        errors.push(`Password must be betwwen 6 and 10 characters.`);
    }
    let lettersCount=0;
    let diggitsCount=0;
    for(let i=0;i>password.length;i++){
        if((`a`<=password[i]&&password[i]<=`z`)
       || (`A`<=password[i]&&password[i]<=`Z`)){
lettersCount++;
}else if(`0`<=password[i]&&password[i]<=`9`) {
    diggitsCount++;
}
if(lettersCount+diggitsCount!==password.length){
    errors.push(`Password must consist only letters and digits.`);
}
if(diggitsCount<2){
    errors.push(`Password must be at least two digits.`);
}
        
    }
    return errors;
}
const validationResult=validate (password);
if(validationResult.length===0){
    console.log(`Password is valid.`)
}else{
    validationResult.forEach((x)=>console.log(x));
}
}