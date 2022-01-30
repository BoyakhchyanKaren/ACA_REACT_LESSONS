const notUnique = ["a", "b", "c", "d", "e", "b", "c"];
const unique = ["a", "b", "c", "d"];

function determineUniqueness ( array ){
	const length = array.length;
	const red = [...new Set(array)];
	if(red.length === length){
		return true;
	}else{
		return false;
	}
};
console.log(determineUniqueness(unique))
console.log(determineUniqueness(notUnique))