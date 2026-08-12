function solve(arr){
    class Song{
        constructor(typeList,songName,time){ 
            this.typeList=typeList;
            this.songName=songName;
            this.time=time;
        }
    }
    let songsArr=[];

    let songCount=arr.shift();
let searchedListType=arr.pop();
for(let currentSong=1;currentSong<=songCount;currentSong++){
    let songStr=arr.shift();
    let [typeList,songName,time]=songStr.split(`_`);
let songObj=new Song(typeList,songName,time);
songsArr.push(songObj);
if(searchedListType===`all`){ 
    for(let songObj of songsArr){
        console.log(songObj.songName);
        
    }

    
}else{
    let filteredSongs=songStr.filter(songObj=>songObj.typeList=searchedListType);
    for(let songObj of filteredSongs){ 
        console.log(songObj.songName);
        
    }
}

}
}