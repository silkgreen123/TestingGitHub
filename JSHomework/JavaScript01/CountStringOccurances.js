function printOccuranceCount(text,wordToSearch){
let arr=text.split(` `).filter(word=>word===wordToSearch);

console.log(arr.length);

}
printOccuranceCount(`Life is beautiful and is fair.`,`is`);