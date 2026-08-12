function fruit(fruitType,weightInGrams,pricePerKg){
const weightInKg=weightInGrams/1000;
const totalCost=weightInKg*pricePerKg;
console.log(`I need $${totalCost.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruitType}.`);
}
fruit();