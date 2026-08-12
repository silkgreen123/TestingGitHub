function arrayRotation(arr,rotations){
    for (i=0;i<rotations;i++){
     const currentFirst=arr.shift();
arr.push(currentFirst);   
    }
console.log(arr.join(" "));
}
arrayRotation([30,20,50,60,10],2);
