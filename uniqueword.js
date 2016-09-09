function UniqueWord(str){
	var arr= str.split(' ')
	var newstr = ""
	var obj = {}

	for(var i = 0; i <arr.length;i++){
		if(arr[i] in obj){
			obj[arr[i]]++
		}
		else{
			obj[arr[i]] = 1
		}
	}
	console.log(obj)
	for(var x in obj){
		if(obj[x] == 1){
			newstr += x + ' '
		}
	}
	return newstr
}
console.log(UniqueWord('Hello Hello Hello baby please how you doing today today man jeesss is real life life'))