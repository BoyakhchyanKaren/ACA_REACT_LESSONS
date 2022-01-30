const _ = require("lodash");

const arr = ["a", "b", "c", "d", "a", "b", "c",]
const a = _.pull(arr, "a", "b");


function pull( array, ...str){
    if(Array.isArray(array)){
        return [];
    }
    const a = array.filter((el,index) => !str.includes(el));
    return a;
}
const b = pull(arr, "a", "b");

console.log(a, "lodash function");
console.log(b, "implementation");