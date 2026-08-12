function solve(first,second){
    /**
     * @param {string} first
     * @param {string} second
     */
    /**
     * 
     * @param {number} from 
     * @param {number} to 
     */
    function getCharactersBetween(from, to){
        const result=[];
        for(let i=from+1;i<to;i++){
            result.push(String.fromCodePoint(i));
        }
//todo invoke the function
console.log(result.join(" "));


    }
    String.fromCodePoint()
    "".charCodeAt()
    const char1=first.charCodeAt(0);
const char2=second.charCodeAt(0);
    if(char1<char2)getCharactersBetween(char1,char2);
        else getCharactersBetween(char2,char1);
}