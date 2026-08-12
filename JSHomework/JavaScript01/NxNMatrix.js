function solve(n){
    //NOTE:This function does not expect any parameters.
    //It consumes (n) from its outer scope (closure).
    function getRow(){
        const result=[];
       for(let i=0;i<n;i++)result.push(n);

       return result;
    }
    for(let i=0;i<n;i++){
        console.log(getRow().join(" "));
    }
}
solve(3);
solve(7);