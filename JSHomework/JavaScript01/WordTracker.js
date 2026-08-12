function solve (input){
    const requestedWords=input[0].split(' ');
    const map={};
    requestedWords.forEach(w=>{
        map[w]=0;
    });
    for(let i=1;i<=input.length;i++){
    if(map.hasOwnProperty(input[i]))  {
        map[input[i]]++;
    }
    for(const [word,count] of Object.entries(map).sort((a,b)=>b[1]-a[1])){
          console.log(`${word} - ${count}`);
    }
    
      
    }

}