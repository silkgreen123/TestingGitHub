function solve(arr){
    
class Cat{
    constructor(catName,age){
        this.name=catName;
        this.age=age;
    }
    meow(){
        console.log(`${this.name}, age ${this.age} says Meow `);
        
    }

}
for(let catStr of arr){
    let [catName,age]=catStr.split(` `);
    let catObj=new Cat(catName,age);
    catObj.meow();
}



}