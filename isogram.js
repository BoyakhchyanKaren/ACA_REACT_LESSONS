function isogram ( str ){
    const split = str.split('');
	const length = split.length;
	const red = [...new Set(split)];
	if(red.length === length){
		return "isogram";
	}else{
		return "not Isogram";
	}
};
const str1 = 'abcdef';
const str2 = 'abcdefab';
const res1 = isogram(str1);
const res2 = isogram(str2);
console.log(res1);
console.log(res2);