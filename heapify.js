function heapify(arr){
	arr.splice(0,0,null);
	var sorted = false;
	console.log(arr)
	while(sorted == false){
		sorted = true
		for(var i = arr.length - 1; i > 1; i-- ){
			if(arr[Math.floor(i/2)] > arr[i]){
				var temp = arr[i]
				arr[i] = arr[Math.floor(i/2)]
				arr[Math.floor(i/2)] = temp
				sorted = false
			}
		}
		console.log(sorted)
	}
	return arr
}

var arr = [1,2,8,-10,29,-90,0,0,12]

console.log(heapify(arr))