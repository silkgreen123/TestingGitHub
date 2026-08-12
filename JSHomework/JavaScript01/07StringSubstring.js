function stringSubstring(word,text){
if(text.toLowerCase().includes(word.toLowerCase())){
    console.log(word)
}else{
    console.log(`${word} not found!`);
}



}
wordToFind();