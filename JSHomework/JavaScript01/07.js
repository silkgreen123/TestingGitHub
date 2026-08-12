function vacation(peopleCount,day,group){
    let price=0;
switch (day) {
    case `Friday`:
        if(group==`students`){
            console.log(price=8.45);
            
        }else if(group=`bussiness`){
            console.log(price=10.90);
            
        }else if(group=`regular`){
            console.log(price=15);
            
        }
        break;
case `Saturday` :
     if(group==`students`){
            console.log(price=10.90);
            
        }else if(group=`bussiness`){
            console.log(price=15.60);
            
        }else if(group=`regular`){
            console.log(price=10);
            
        }
    break;
    case `Sunday` :
         if(group==`students`){
            console.log(price=15);
            
        }else if(group=`bussiness`){
            console.log(price=20);
            
        }else if(group=`regular`){
            console.log(price=22.50);
            
        }
        break;
    default:
        break;
}



let totalPrice=peopleCount * price;
if(group==`students`&&peopleCount>=30){
    totalPrice=totalPrice*0.85;
}
if(group==`bussiness`&&peopleCount>=100){
    totalPrice=peopleCount-10*price;
}
if(group==`regular`&&peopleCount>10&&peopleCount<20){
    totalPrice=totalPrice*0.95;
}
console.log(totalPrice.toFixed(2));

}
vacation(40,`Saturday`,`regular`);