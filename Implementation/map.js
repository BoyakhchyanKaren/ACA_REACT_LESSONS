/*

ReadonlyArray.map<U>(callbackfn: (value: T, index: number, array: readonly T[]) => U, thisArg?: any): U[]
A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.


Calls a defined callback function on each element of an array, and returns an array that contains the results.


*/



Array.prototype.myMap = function ( callback ) {
    try{
        const result = [];
        for(let i=0; i< this.length; i++){
            result.push(callback(this[i], i, this));
        }
        return result;
    }catch(e) {
        console.log("Something went wrong...", e);
    }
};
const a = [1,2,3,4,5];
const q = a.map(el => el + 4);
const w = a.myMap(el => el + 4);
console.log(q);
console.log(w);