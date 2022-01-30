/*
Int8Array.findIndex(predicate: (value: number, index: number, obj: Int8Array) => boolean, thisArg?: any): number
find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. 
If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1.


Returns the index of the first element in the array where predicate is true, and -1 otherwise.
*/

Array.prototype.myFindIndexFunction = function (callback) {
    try {
        let result = -1;
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
                result = i;
                break;
            }
        }
        return result;
    } catch (error) {
        console.log("Something went wrong...", error);
    }
}

const a = [2, 3, 4, 5, 6, 7];
const q = a.findIndex((el, index) => el === 3);
const w = a.myFindIndexFunction((el, index) => el === 3);
console.log(w);
console.log(q);