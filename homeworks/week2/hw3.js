function reverse(str) {
var result = ''
	for(let i=str.length-1; i>=0; i--){
		result = result + str[i]
	}
	console.log(result)
}

reverse('1,2,3,2,1');