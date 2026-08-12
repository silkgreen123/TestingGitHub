function printObjProps(obj){
let entryData=Object.entries(obj);

for(let [key,value] of entryData){
console.log(`${key} -> ${value}`);
}
}