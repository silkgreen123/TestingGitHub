function solve(fruit,weigthInGr,pricePerKg){
    let weigthInKg=weigthInGr/1000;
let totalPrice=0;
totalPrice=weigthInKg*pricePerKg;
console.log(`I need${totalPrice.toFixed(2)} to buy ${weigthInKg.toFixed(2)} ${fruit}`);

}