function solve(array){
let contacts={};
for(let contactStr of array){
let [name,phoneNumber]=contactStr.split(` `);
contacts[name]=phoneNumber;
}
let entryData=Object.entries(contacts);

for(let [name,phoneNumber] of entryData){
    console.log(`${name} -> ${phoneNumber}`);
    
}
}