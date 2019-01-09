var str="Lighthouse in the house"
var objo = {};

var withoutSpace= str.split(' ').join('').toLowerCase()
console.log (withoutSpace)



function countLetters(str){
	for (var i = 0; i < withoutSpace.length; i++) {
		if (!objo[withoutSpace[i]]){
			objo[withoutSpace[i]]=1
		} else{
			objo[withoutSpace[i]]++
		}
	}
	return objo
}

console.log (countLetters(withoutSpace))

// function initOb (key){
// 	var arr = getLetters(key);
// 	console.log(arr.length)
// 	for (var i = 0; i < arr.length; i++) {
// 		objo[arr[i]]= 1;
// 	}
// 	return objo
// }

// function count(val){
// 	var result= initOb(withoutSpace)
// 	for (var i = 0; i < result.length; i++) {
// 	 if result
// 	}
// }

// console.log(getLetters(withoutSpace));
// console.log(initOb(withoutSpace))


// // function getNumbers(word){
// // 	var numArr= [];
// // 	for(var x=0; x< word.length; x++){
// // 		if (numArr[x] !== NaN){
// // 			numArr.push(1)
// // 		} 
// // 		if (word[x] !==  " "){
// // 		numArr.push(x)+=1}
// // 	}
// // 	return NumArr
// // }

// // console.log(getNumbers(str))