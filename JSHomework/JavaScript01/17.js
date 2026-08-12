function solve(year){
    const isLeap=(year % 4===0 && year % 100 !==0 ) || year % 400===0;
if(isLeap){
    console.log("yes");
    
}else{
    console.log("no");
    
}



}
solve(1984);
solve(1990);