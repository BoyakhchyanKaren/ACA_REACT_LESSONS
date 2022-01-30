//without reducing array length.

const _ = require("lodash");
const arr = ["a", "b", "c", "d"];

const a = _.tail(arr);

function tail(array){
    if(!Array.isArray(array)){
        return [];
    }
    return array.filter((el, index) => index !== 0);
}
const b = tail(arr);
console.log(b, "implementation");
console.log(a, "lodash function");

