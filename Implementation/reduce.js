/*

ReadonlyArray.reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T
A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.


Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, 
and is provided as an argument in the next call to the callback function.


*/



Array.prototype.myReduce = function (callback, initialValue) {
    try {
        let acum = initialValue;
        let currentIndex = 0;
        if (initialValue === undefined) {
            acum = this[0];
            currentIndex = 1;
        }
        for (let i = currentIndex; i < this.length; i++) {
            acum = callback(acum, this[i], i, this);

        }
        return acum;
    } catch (e) {
        console.log("Something went wrong...", e);
    }
}

const a = [1, 2, 3, 4, 5];
const c = a.reduce((acum, value, index, array) => {
    console.log(
        acum,
        value,
        index,
        array
    )
})
console.log(c);
const e = a.myReduce((acum, value, index, array) => {
    console.log(
        acum,
        value,
        index,
        array
    )
})
console.log(e);