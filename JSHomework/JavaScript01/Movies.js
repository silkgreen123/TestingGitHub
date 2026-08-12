function solve (input){
    const patterns[
        /^addMovie(?<name>.+)$/,
        /^(?<name>.+)directedBy(?<director>.+)$/,
        /^(?<name>.+)onDate(?<date>.+)$/
    ];
    const movies={};
    for(const el of input){
        let match;
     if(match=el.match((patterns[0])!=null)){
    // const match=el.match(patterns[0])
     const name=match.groups["name"];
     console.log(`Add movie with name:${name}`);
}else if(match=el.match( (patterns[1])!=null)){
    const match=el.match(patterns[1])
    const name=match.groups["name"]
    const director=match.groups[director];
    if(movies.hasOwnProperty(name)){
        movies[name]=director;
    }
   // console.log(`Add director.Movie ${name};Director:${director}`);
    
    
}else if(match=el.match((patterns[2])!=null)){
    const match=el.match(patterns[2])
    const name=match.groups["name"]
    const date=match.groups["date"];
    console.log(`Add director.Movie ${name};Date:${date}`);
     movies[name].date=date;
      if(movies.hasOwnProperty(name)){
        movies[name]=date;
    }
    }
}
for(const movie of Object.values(movies)){
    console.log(JSON.stringify(movie));
    
}
}