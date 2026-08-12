function splitter(text){
const splitPattern=/(?=[A-Z])/;
const words=text.split(splitPattern);

console.log(words.join(`, `));
}