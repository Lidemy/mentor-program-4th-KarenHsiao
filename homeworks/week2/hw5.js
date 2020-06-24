function join(arr, concatStr) {
	var result = ''
	if(arr.length == 0){
		return result
	}
	else{
 		for(let i=0; i<arr.length-1; i++){
  			result = result + arr[i] + concatStr
		}
		result = result + arr[arr.length-1]   //arr 最後一個元素單獨加進 result，避免在 for 迴圈裡多印一個 concatStr
	}
	return result
}

function repeat(str, times) {
  var result = ''
  for(let i=0; i<times; i++){
  	result = result + str
  }
  return result
}
console.log(join(['a'], ',,'));
console.log(repeat('a', 5));
