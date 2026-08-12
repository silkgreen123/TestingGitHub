function vacationBudget(peopleCount,typeofGroup,dayofWeek){
   
   let totalPrice=0; 
switch(typeofGroup){
    case `Students`:
        if(dayofWeek==`Friday`){
            price=8.45;
        }else if(dayofWeek==`Saturday`){
            price=9.80;
        }else if(dayofWeek==`Sunday`){
            price=10.45;
        }
        break;
         case `Business`:
        if(dayofWeek==`Friday`){
            price=10.90;
        }else if(dayofWeek==`Saturday`){
            price=15.60;
        }else if(dayofWeek==`Sunday`){
            price=16;
        }
        break;
         case `Regular`:
        if(dayofWeek==`Friday`){
            price=15;
        }else if(dayofWeek==`Saturday`){
            price=20;
        }else if(dayofWeek==`Sunday`){
            price=22.50;
        }
        break;
}
if(typeofGroup==`Students`&&peopleCount>=30){
    discount=totalPrice*0.15;
    finalprice=totalPrice-discount;
    console.log(finalprice);
}
if(typeofGroup==`Business`&&peopleCount>=100){
   totalPrice= peopleCount-10*price;
}
if(typeofGroup==`Regular`&&peopleCount>=10&&peopleCount<=20){
    discount=totalPrice*0.05;
    finalprice=totalPrice-discount;
    console.log(finalprice);
}

 totalPrice=peopleCount * price;
console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
vacationBudget(30,`Students`,`Sunday`);



