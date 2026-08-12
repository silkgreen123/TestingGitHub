function solve(a,b){
    function factorial (n){
if(n===0||n===1) return 1;
return n*factorial(n-1);

    }
    const result=factorial(a)/factorial(b);
    console.log(result.toFixed(2));
    
}