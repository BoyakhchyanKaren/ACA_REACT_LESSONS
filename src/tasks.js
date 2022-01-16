//1


const arr = ["licnep", "circular", "pupil", "nilcpe", "leppnec"];
function foo(arg, text) {
    let b = text.length;
    let result = [];
    for (let j = 0; j < arg.length; j++) {
        let count = 0;
        if (arg[j].length === text.length) {
            for (let i = 0; i < text.length; i++) {
                if (arg[j].includes(text[i])) {
                    count++;
                }
            }
        }
        if (count === b) {
            result.push(arg[j]);
        }
    }
    return result.length === 1 ? result[0] : result;
};
const result = foo(arr, "pencil");
console.log(result);


//2


let str = "This is some text";
let str2 = "Yes, London. You know: fish, chips, cup of tea, bad food, worse weather";

function foo(arg, text) {
    let arr = [];
    const split = arg.split(" ");
    for (let i = 0; i < split.length; i++) {
        if(split[i].includes(text)){
            let a = split[i].replace(text, "");
            arr.push(a);
        }else{
            arr.push(split[i]);
        }
    }   
    return arr.join(" ");
};
const result1 = foo(str, "is");
const result2 = foo(str2, "o");

console.log({
    answer1: result1,
    answer2: result2
})


//3


const str = "If at _ you don't _, try, try _.";
const arr = ["first", "succeed", "again"];

function foo(sentence, arg) {
    let result = [];
    const split = sentence.split(" ");
    let k = 0;
    for(let i=0; i<split.length; i++){
        if(split[i] === "_" || split[i][0] === "_"){
            let text = split[i].replace("_", arg[k]);
            k++;
            result.push(text);
        }else{
            result.push(split[i]);
        }
    };
    return result.join(" ");
};
console.log(foo(str, arr));


//4


const arr = ["A", "revolution", "without", "dancing", "is", "a", "revolutiop", "not", "worth", "having."];
function longest(arg) {
    const max = Math.max(...arg.map(el => el.length));
    const result = arg.filter(el => el.length === max);
    return result.length === 1 ? result[0] : result[result.length - 1];
};
const result1 = longest(arr);
console.log(result1);



