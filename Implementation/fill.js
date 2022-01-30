/*
(method) Array<string>.fill(value: string, start?: number, end?: number): string[]
Changes all array elements from start to end index to a static value and returns the modified array

@param value — value to fill array section with

@param start
index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array.

@param end
index to stop filling the array at. If end is negative, it is treated as length+end.
*/



Array.prototype.myFill = function(value, start = 0, end = this.length) {
    try {
      start = start < 0 ? this.length + start : start;
      end = end < 0 ? this.length + end : end;
      for (let i = start; i < end; i++) {
        this[i] = value;
      }
      return this;
    } catch (e) {
      console.log("something went wrong...", e);
    }
  };
  let arr = ["a", "a", "a", "a", "a"];
  
  console.log(arr.myFill(5, -4, -2));
  