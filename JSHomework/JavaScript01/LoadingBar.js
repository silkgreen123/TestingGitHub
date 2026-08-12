function solve(percentage){
    function repeat(character,count){
return Array.from({length:count},()=>character).join('');
    }
    function getVisialStatus(completedParts,emptyParts){
return`[${repeat("%",completedParts)}${repeat(".",emptyParts)}]`;
    }
const result=percentage/10;
if(result<10){
    console.log(`${percentage}% [${getVisialStatus(result,10-result)}]`);
    console.log(`Still loading...`)
}else{
    console.log(`${percentage}% Complete!`);
    
    console.log(getVisialStatus(result,0));
}
}