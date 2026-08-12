function yardGreening(greenedArea){
let greenedPricePerMeter=7.61;

let greenedAreaPrice=greenedArea * greenedPricePerMeter;
let discount=greenedAreaPrice * 0.18;
let greenedAreaTotal=greenedAreaPrice - discount;


console.log(`The final price is: ${greenedAreaTotal} lv.`);
console.log(`The discount is: ${discount} lv.`);
}

yardGreening(150);