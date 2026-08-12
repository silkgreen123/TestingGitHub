function solve(array){
let meeting={};
for(let meetingStr of array){
    let[day, person]=meetingStr.split(` `);
    if(day in meeting){
        console.log(`Conflict on ${day}!`);
        
    }else{
        meeting[day]=person;
        console.log(`Scheduled for ${day}`);
        
    }
    
    }
    let entriesData=Object.entries(meeting);
    for(let [day,person] of entriesData){
        console.log(`${day} -> ${person}`);
        
    }
    
}
