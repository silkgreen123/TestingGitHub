function solve(input){
let parking=[];
for(const el of input){
    const [direction,carNumber]=el.split(", ");
    if(direction==="IN") parking.push(carNumber);
else if (direction==="OUT") parking=parking.filter(x => x!==carNumber);
    }
    if(parking.length===0) console.log(`Parking lot is empty.`)
else{
     parking.sort();
     for(const carNumber of parking){
        console.log(carNumber);
        
     }
}

}
    
    
    

