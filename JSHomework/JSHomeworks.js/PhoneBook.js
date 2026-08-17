function solve(arr){
let contacts={};
for(contactStr of arr){
    let[name,phoneNum]=contactStr.split(' ');
    contacts[name]=phoneNum;

}
console.log(contacts);

}
solve(`['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']`);


