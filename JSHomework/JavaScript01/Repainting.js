function repainting (nylonQuantity, paintingQuantity, thinnerQuantity, workHours){
let totalNylonQuantity=nylonQuantity + 2;
let totalPaintingQuantity=paintingQuantity + 0.1 * paintingQuantity;
let materialPrice=(totalNylonQuantity * 1.5 + totalPaintingQuantity * 14.5 + thinnerQuantity * 5) +0.4;
let initialPayment=materialPrice * 0.3;
let workersPayment=initialPayment * workHours;
let totalPrice=materialPrice + workersPayment;
console.log(totalPrice);

}
repainting(10, 11, 4, 8);
