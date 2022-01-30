const _ = require("lodash");

const arr = [1, 2, 3, 4, 5, 6, 7];

const a = _.take(arr, 5);


function take(array, count = 1) {
    if(count === 0){
        return [];
    }
    return array.slice(0, count);
}

const b = take(arr, 5);
console.log(b, "implementation");
console.log(a, "lodash function");
