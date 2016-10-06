function bubbleSort(arr){
    for(var i = arr.length-1; i > 0; i--){
        var bool = false;
        for(var j = 0; j < i; j++){
            if(arr[j] > arr[j + 1]){
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                bool = true;
            }
        }
        if (bool === false){
            return arr;
        }
    }
    return arr;
}
console.log(bubbleSort( [1,2,3] ));