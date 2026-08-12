/**
 * @param {string} listOfWords
 * @param {string} text
 */
function solve(listOfWords,text){
   const words= listOfWords.split(", ");
for (const word of words){
const template=Array.from({length:word.length},()=>`*`).join("");
text=text.replaceAll(template,word);
}
   console.log(text);
}