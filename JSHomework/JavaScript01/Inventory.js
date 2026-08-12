function solve (input){
    const heroes=[];
    for(const el of input){
const data=el.split("/");
//array
const name=data[0];
const level=Number(data[1]);
let items;
if(data.length>2) items=data[2].split(', ');
else items=[];
heroes.push({name,level,items});

    }
    heroes.sort((a,b)=> a.level-b.level);
    for(let hero of heroes){
        console.log(`Hero: ${hero.name} `);
        console.log(`level => ${hero.level}`);
        console.log(`items =>${hero.items.join(", ")}`);
        
        
    }

}