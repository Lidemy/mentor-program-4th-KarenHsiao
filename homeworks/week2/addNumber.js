
function add(a, b){
	 a = a.toString(2).split('')		//將輸入轉為二進制並將位元個別放進陣列
	 b = b.toString(2).split('')
	
	if(a.length > b.length){		//將前面的位元補0，使A，B兩數的位數一樣
		let d =0
		d = a.length - b.length
		for(let i=1; i<=d; i++){
			b.unshift(0)
		}
	}else{
		d = b.length - a.length
		for(let i=1; i<=d; i++){
			a.unshift(0)
		}
	}
	a.unshift(0)			//兩數都各補一個 0，為了等下的進位運算使用
	b.unshift(0)

	a = reverseArr(a, a.length)		//將a, b 兩陣列反轉
	b = reverseArr(b, b.length)

	let result = []
	let carry = []
	result[0] = a[0] ^ b[0]		//第0元素先單獨做運算
	carry[0] = a[0] & b[0]
	for(let i=1; i<a.length; i++){			
		result[i] = addDigit(a[i], b[i], carry[i-1])
		carry[i] =  carryDigit(a[i], b[i], carry[i-1])
	}
	result = reverseArr(result, result.length)		//將 result 陣列反轉得到正確的總和	
 	result = parseInt(result.join(''),2)		//陣列轉字串，字串再轉10進位整數
	console.log(result)
}
function addDigit(x, y, c){
	return x ^ y ^ c
}
function carryDigit(x, y, c){
	return (x&y) | (y&c) | (x&c)
}
function reverseArr(arr,length){
	let result =[]
	for(let i=length-1; i>=0; i--){
		result.push(arr[i])
	}
	return result
}

add(2,10)