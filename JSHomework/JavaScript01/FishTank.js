function fishTank(length, width, heigth, percent){
let totalVolumeInCm=length * width * heigth;
let totalVolumeInL=totalVolumeInCm/1000;
let decimalPercent=percent/100;
let spaceTaken=decimalPercent * totalVolumeInL;
let spaceLeft=totalVolumeInL - spaceTaken;
console.log(spaceLeft);
}
fishTank(85, 75, 47, 17);