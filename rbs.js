function rbs(arr, num){
	if(arr.length == 1){
		if(arr[0] == num){
			return true
		}
		else{
			return false
		}
	}
	var newArr = arr.slice(0,Math.floor(arr.length/2))
	if(newArr[newArr.length-1]>= num){
		return rbs(newArr, num)
	}
	else{
		return rbs(arr.slice(Math.floor(arr.length/2)), num)
	}
}

rbs([1,2,3,4,5,8],5)