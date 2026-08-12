function foodDelivery(chickenMenuCount,fishMenuCount,vegetarianMenuCount){
let menusPrice=chickenMenuCount * 10.35 + fishMenuCount * 12.40 + vegetarianMenuCount * 8.15;
let dessertPrice=menusPrice * 0.2;
let totalprice=menusPrice + dessertPrice + 2.50;
console.log(totalprice);
}
foodDelivery(2, 4, 3);