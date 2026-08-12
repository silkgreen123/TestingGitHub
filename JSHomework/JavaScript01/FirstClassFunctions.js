function transformToUpperCase(message){
return message.toUpperCase();
}
function transformToLowerCase(message){
    return message.toLowerCase();
}
function printFinalMessage(message,transformFunc){
console.log(transformFunc(message));
}


printFinalMessage(`Hi Pen4o`,transformToLowerCase);
