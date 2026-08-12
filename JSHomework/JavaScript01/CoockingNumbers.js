function cookingNumbers(num,op1,op2,op3,op4,op5){
let result=Number(num);
const operations=[op1,op2,op3,op4,op5];
for (const op of operations){
    if(op==="chop"){
        result/=2;
    }else if (op==="dice"){
        result=Math.sqrt(result);
    }else if(op==="spice"){
        result+=1;
    }else if(op==="bake"){
        result*=3;
    }else if(op==="fillet"){
        result*=0.8;
        console.log(result);
    }
}

}
cookingNumbers();