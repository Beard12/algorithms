function balancePoint(arr){
  for(var i =1; i < arr.length; i++){
    var sum = 0;
    var sum2 = 0;
    var slice_one = arr.slice(0,i);
    for(var x = 0; x<slice_one.length; x++){
      sum += slice_one[x];
    }
    for(var y = i; y < arr.length; y++){
      sum2 += arr[y];
    }
    if(sum == sum2){
      return true;
    }
  }
  return false;
}

var array = [1,3,2,4,10]
console.log(balancePoint(array));