function solve(arr){
let peopleAddresses={};
for (let addressStr of arr){
    let [name,address]=addressStr.split(`:`);
    peopleAddresses[name]=address
}
let entriesData=Object.entries(peopleAddresses).sort((a,b)=>a[0].localeCompare(b[0]));
    for(let [person,address] of entriesData){
        console.log(`${person} -> ${address}`);
        
    }


    
    
}
