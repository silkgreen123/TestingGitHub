function solve(input){
const dictionary={};
for(const el of input){
    const obj=JSON.parse(el);
    for(const key in obj){
        dictionary[key]=obj[key];
    }
}
for(const term of Object.keys(dictionary).sort){
    const definition=dictionary[term];
    console.log(`Term ${term} => Definition: ${definition}`);
}


}