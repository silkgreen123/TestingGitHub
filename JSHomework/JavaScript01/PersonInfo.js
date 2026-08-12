function createPersonObj(fName,lName,a){
let personObj={
firstName:fName,
lastName:lName,
age:a
};
return personObj;
}
console.log(createPersonObj("Peter", "Pan","20"));