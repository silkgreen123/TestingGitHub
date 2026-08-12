function solve(currentStock,delivery){
//[`product1`,`quantity1`,product2,quantity2]
const stock ={};
for(let i=0;i<currentStock.length;i+=2){ 
const name=currentStock[i];
const quantity=Number(currentStock[i+1]);
stock[name]=quantity;
}
for(let i=0;i<delivery.length;i+=2){ 
const name=delivery[i];
const quantity=Number(delivery[i+1]);
stock[name]=quantity;
//if(!(name in stock))stock[name]=0;
if(!stock.hasOwnProperty(name))stock[name]=0;
stock[name]+=quantity;
}
console.log(stock);
//for in
for(const productName in stock){
    console.log(`${productName} -> ${stock[productName]}`);
    
}

}
solve(["chips","5","coca cola","9"],["flour","44"]);