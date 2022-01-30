const _ = require("lodash");
const a = _.intersection([1, "a", 2], [4, 2,"a", 1, 2], [40, 52,"a" ,1, 2]);


const intersection = (...arrays) => {
    return arrays.reduce((acum, value) => {
        return acum.filter(element => {
            if(value.includes(element)){
                console.log(element, "passed condition");
                return true;
            }
        });
    })
};

const b = intersection([1, "a", 2], [4, 2,"a", 1, 2], [40, 52,"a" ,1, 2]);
console.log(a, "lodash function");
console.log(b, "implementation");