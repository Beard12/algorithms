function trib(num){
	var n = Math.floor(num)
	if (n <=1){
		return 0;
	}
	else if (n <= 3){
		return 1;
	}
	else{
		return trib(n-1)+ trib(n-2) + trib(n-3)
	}
}


