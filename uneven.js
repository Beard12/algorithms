function uneven(num, idx, ret){
	if(idx == undefined){
		idx = 0;
		num = num.toString();
		ret = ""
	}
	if(num.length == idx){
		if(ret.length == 0){
			return 0
		}
		else{
			return ret * 1
		}
	}
	if(num[idx] == "-" || num[idx] % 2 != 0){
		ret +=num[idx]
	}
	return uneven(num, idx + 1, ret)
}

uneven(-3445)