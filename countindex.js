var str="Lighthouse in the house"
var objo = {};

var withoutSpace= str.split(' ').join('').toLowerCase()
console.log (withoutSpace)



function countLetters(str){
	for (var i = 0; i < str.length; i++) {
		if (!objo[str[i]]){
			objo[str[i]]=[str.indexOf(str[i])]
		} else{

			objo[str[i]].push(i);
		}
	}
	return objo
}
console.log (countLetters(withoutSpace))
