function capitalize(str) {
  if(str[0]>= 'A' && str[0]<= 'Z'){		//如果第一個字是大寫就回傳原本的 str
  	return str
}else{
	var newstr = ''
	for(let i=1; i<str.length; i++){	
	newstr += str[i]				//將 str 的第二個字到最後一個字依序放入空字串
	}
	var	firstLetter = str[0].toUpperCase()	//將第一個字轉為大寫
	str = firstLetter + newstr				//str = 第一個大寫字 + 後面的原字串
	return str
	}
}

console.log(capitalize('hello'))