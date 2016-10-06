function flatten(arr){
  var newarr = [];
  for(var i = 0; i<arr.length; i++){
    if(Array.isArray(arr[i])){
      if(arr[i].length>0){
        var rec = flatten(arr[i]);
        for(var j = 0; j<rec.length; j++){
          newarr.push(rep[j]);
        }
      }
    }
    else{
      newarr.push(arr[i]);
    }
  }
  return newarr;
}


console.log(flatten([4,3,6,[],7,8,[4,5,6,[9,8,[6,5,4,3,[1,2,3,[5,4]]]],6],6,7,5,4]));