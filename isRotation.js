function rotate(str,num){
	return str.slice(str.length-num) + str.slice(0, str.length-num)
}

rotate("VIRGasdfLOVERS",2)


function isRotation(str, str2,memo){
	if(memo == undefined){
		memo = str
	}
	else if (str == memo){
		return false
	}
	if(str == str2){
		return true
	}
	var rotate = str.slice(str.length-1) + str.slice(0,str.length-1)
	return isRotation(rotate,str2,memo)
}

console.log(isRotation("string1", "ng1stri"))
