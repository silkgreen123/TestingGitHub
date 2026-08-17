function solve(jsonStr){
let personObj=JSON.parse(jsonStr);
let entries=Object.entries(personObj);
for(let [key,value] of entries){
console.log(`${key} : ${value}`);
}
}
solve(`{"name": "George", "age": 40, "town": "Sofia"}`);

    

