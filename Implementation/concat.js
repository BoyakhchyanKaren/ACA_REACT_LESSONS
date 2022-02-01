/*
(method) Array<number>.concat(...items: ConcatArray<number>[]): number[] (+1 overload)
Combines two or more arrays. This method returns a new array without modifying any existing arrays.

@param items — Additional arrays and/or items to add to the end of the array.
*/

Array.prototype.myConcat = function(...arr) {
  try {
    const newarr = [...this, ...arr];
    return newarr.flat(Infinity);
  } catch (e) {
		console.log("Something went wrong...!");
  }
};
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const arr3 = [6, 7, 8];
const concat = arr1.concat(arr2, {name:"Karen"}, arr3);
const myConcat = arr1.myConcat(arr2, {name:"Karen"}, arr3);
console.log(concat);
console.log(myConcat);





Array.prototype.myConcat = function (...arg) {
	let rec = (arr) => {
		for(let item of arr){
			if(!Array.isArray(item)){
				this.push(item);
			}else{
				rec(item);
			}
		}
	};
	rec(arg);
	return this;
};
