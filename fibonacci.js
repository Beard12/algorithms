function fib(num){
	var n = Math.floor(num)
	if(n == 1){
		return 1
	}
	else if (n == 0){
		return 0
	}
	return fib(n-1) + fib(n-2)
}