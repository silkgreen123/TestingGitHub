function transformToupperCase(message){
return message.toUpperCase();
}
function transformToLowerCase(message){
    return message.toLowerCase();
}
function printFinalMessage(message,transformFunction){
    console.log(transformFunction(message));
}
printFinalMessage(`Hi Ivo`,transformToLowerCase);