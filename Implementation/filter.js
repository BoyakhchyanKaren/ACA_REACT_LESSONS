/*
The filter() method creates a new array with all elements that pass the test implemented by the provided function.
A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
filter() calls a provided callbackFn function once for each element in an array, and constructs a new array of 
all the values for which callbackFn returns a value that coerces to true. 
CallbackFn is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which 
have been deleted or which have never been assigned values. 
Array elements which do not pass the callbackFn test are skipped, and are not included in the new array.
*/


Array.prototype.myFilter = function (callback) {
    if(Array.isArray(this)) {
        throw new TypeError(`${this}.filter() is not a function`);
    }
    try {
        let result = [];
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
                result.push(this[i]);
            }
        }
        return result;
    } catch (e) {
        console.log("Something went wrong...", e);
    }
};
const a = {e:[1,2,3,4,5]};
const q = a.filter(el => el > 10);
const w = a.myFilter(el => el > 10);
console.log(q)
console.log(w);
