function solve(input){
    const towns=[];

for(const row of input){
    const values=row.split(`|`);
    const town={
        town: values[0],
        latitude: Number(values[1]).toFixed(2),
        longitude: Number(values[2]).toFixed(2)
    };
    towns.push(town);
}
for(const town of towns){
    console.log(town);
    
}
}