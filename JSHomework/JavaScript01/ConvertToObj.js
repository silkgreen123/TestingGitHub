function solve(jsonStr){ 
let personObj=JSON.parse(jsonStr);
let entriesData=Object.entries(personObj);
for(let[key,value] of entriesData){
console.log(`${key}: ${value}`);

}
}