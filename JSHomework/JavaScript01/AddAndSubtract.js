function solve(x,y,z){
/**
 *   @param {number} num1
 * @param {number} num2
 * 
 * 
 *    
 */


function sum(num1,num2){
return num1+num2;
}
/**
 *   @param {number} num1
 * @param {number} num2
 * 
 * 
 *    
 */


function subtract(num1,num2){
return num1-num2;
}
const firstStep=sum(x+y);
const secondStep=subtract(firstStep,z);
console.log(secondStep);
}