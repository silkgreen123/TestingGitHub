function solve(text){
const pattern= /#(?<tag>\[a-zA-Z]+)/g;
const matches=text.matchAll(pattern);
for(const match of matches){
    const current=match.groups.tag;
    console.log(current);
    
}
}