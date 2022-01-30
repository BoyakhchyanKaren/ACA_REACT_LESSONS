/*
ReadonlyArray.flat<A, D extends number = 1>(depth?: D): FlatArray<A, D>[]
The maximum recursion depth


Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.


*/


Array.prototype.myFlat = function (depth = 1) {
    try {
        const newarr = [];
        const callback = (arr, dp) => {
            for (let i = 0; i < arr.length; i++) {
                if (Array.isArray(arr[i]) && dp) {
                    callback(arr[i], dp - 1)
                } else {
                    newarr.push(arr[i]);
                }
            }
        };
        callback(this, depth);
        return newarr;
    } catch (e) {
        console.log("Something went wrong...", e);
    }
}
const a = [1, 2, [1, 3, 4], [5, 7, 9, 10], [7, [8, [9]]]];
const c = a.myFlat(2);
console.log(c);