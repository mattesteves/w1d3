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
