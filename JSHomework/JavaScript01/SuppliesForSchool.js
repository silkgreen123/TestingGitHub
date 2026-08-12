function suppliesForSchool(penPackageCount,markerPackageCount,detergentL,discountPercent){
let totalPrice=(penPackageCount * 5.80) + (markerPackageCount * 7.20) + (detergentL * 1.20);
let discountDecimal=discountPercent/100;
let finalPrice=totalPrice - discountDecimal * totalPrice;
console.log(finalPrice);
}
suppliesForSchool(2, 3, 4, 25);