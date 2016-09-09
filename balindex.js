function balanceIndex(arr){
  for(var i = 1; i<arr.length-1; i++){
    var sum = 0;
    var sum2 = 0;
    var slice = arr.slice(0,i);
    for(var j = 0; j < slice.length; j++){
      sum +=slice[j];
    }
    for(var k = i+1; k < arr.length; k++){
      sum2 += arr[k];
    }
    if(sum == sum2){
      return i;
    }
  }
  return -1;
}

 var arr = [1,3,2,4]

console.log(balanceIndex(arr));


