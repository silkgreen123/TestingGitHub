function solve(firstName,lastName,hairColor){
    let personObj={
        name:firstName,
        lastName,
        hairColor
    }
let jsonStr=JSON.stringify(personObj);
console.log(jsonStr);

}