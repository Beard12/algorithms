function recfacto(num){
	if(num == 0){
		return 1
	}
	return num * recfacto(num-1)
}

console.log(recfacto(10))