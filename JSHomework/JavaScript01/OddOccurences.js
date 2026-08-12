function solve(input){
    const words=input.toLowerCase().split(" ");
const counter={};
for(const word of words){
    if(!counter.hasOwnProperty(word)) counter[word]=0;
    counter[word]++;
}
const result=Object.keys(counter).filter(w => counter[w] %2 !==0);
console.log(result.join(" "));

}
