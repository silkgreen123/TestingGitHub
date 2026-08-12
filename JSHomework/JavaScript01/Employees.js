function solve (employeeNames){ 
const employees=[];
for(const name of employeeNames){
    const obj={ name:name,personalNumber:name.length };
    //            key value      key         value
    employees.push(obj);
}
for(const employee of employees){
console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);

}


}