function depositCalculator(depositedSum,depositedTerm,annualInterestPercent){
    let annualInterestDecimal=annualInterestPercent/100;//0.07
let sum=depositedSum + depositedTerm *( (depositedSum * annualInterestDecimal) /12);
console.log(sum);
}
depositCalculator(2350,6,7)