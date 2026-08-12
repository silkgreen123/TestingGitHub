function progectsCreation(architectName,projectsCount){
let timeForOneProject=3; 
let allTimeNeeded=projectsCount * timeForOneProject;
console.log(`The architect ${architectName} will need ${allTimeNeeded} hours to complete ${projectsCount} project/s.`);
}

progectsCreation("Ivan",3);