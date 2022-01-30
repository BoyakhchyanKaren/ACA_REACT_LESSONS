/*
Int8Array.find(predicate: (value: number, index: number, obj: Int8Array) => boolean, thisArg?: any): number
find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. 
If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.


Returns the value of the first element in the array where predicate is true, and undefined otherwise.


*/

Array.prototype.myFind = function (callback) {
    if(!Array.isArray(this)){
        throw new TypeError(`${this}.find() is not a function`)
    }
    try {
        let result = [];
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
                result.push(this[i]);
            }
        }
        return result[0];
    } catch (e) {
        console.log('Something went wrong...', e);
    }
};
const arr = [1, 2, 10, 5, 7, 9];
const a = arr.myFind((el, index) => index === 4);
console.log(a);