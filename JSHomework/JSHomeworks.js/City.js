function solve(obj) {
let entries=Object.entries(obj);
for([key,value] of entries){
    console.log(`${key}->${value}`);
    
}
}
solve({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
})



