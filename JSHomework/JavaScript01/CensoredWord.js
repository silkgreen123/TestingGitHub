function censorWord(text,wordCensor){
let starTemplate=`*`.repeat(wordCensor.length);
text=text.replaceAll(wordCensor,starTemplate);
console.log(text);
}
censorWord(`A small sentence with some words.`,`small`);