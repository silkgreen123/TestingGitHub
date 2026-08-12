function petShop(totalDogsFood, totalCatsFood){
    let dogsFoodPricePerCount=2.50;
    let catsFoodPricePerCount=4;
let totalPriceDogsFood=dogsFoodPricePerCount* totalDogsFood;
let totalPriceCatsFood=catsFoodPricePerCount * totalCatsFood;
let total=totalPriceDogsFood + totalPriceCatsFood;

console.log(`${total} lv.`);

}

petShop(13,9);