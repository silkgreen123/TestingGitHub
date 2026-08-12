function basketballEquipment(annualTax){
let sneakersPrice= annualTax * 0.6;
let outfitPrice= sneakersPrice * 0.8;
let ballPrice=(1/4) * outfitPrice;
let accessoriesPrice=(1/5) * ballPrice;
let totalPrice=sneakersPrice + outfitPrice + ballPrice + accessoriesPrice + annualTax;
console.log(totalPrice);

}
basketballEquipment(365);