function minHeap(){
	this.arr =[null]
	this.isEmpty = function(){
		if(this.arr.length == 1){
			return true
		}
		return false
	}
	this.size = function(){
		return this.arr.length - 1
	}
	this.top = function(){
		return this.arr[1]
	}
	this.contains = function(val){
		if(val < this.arr[i]){
			return false
		}
		for(var i = 1; i < this.arr.length; i++){
			if(this.arr[i] == val){
				return true
			}
		}
		return false
	}
	this.insert = function(val){
		this.arr.push(val)
		index = this.arr.length - 1
		while (index > 1){
			console.log(index)
			if(val < this.arr[Math.floor(index/2)]){
				this.arr[index] = this.arr[Math.floor(index/2)]
				this.arr[Math.floor(index/2)] = val
				index = Math.floor(index/2)
			}
			else{
				break
			}
		}
	}
	this.extract = function(){
		var last = this.arr.pop()
		var min = arr[1]
		arr[1] = last
		var index = 1
		while( index < this.arr.length-1){
			if(last> this.arr[index*2]){
				this.arr[index] = this.arr[index*2]
				this.arr[index*2] = last
				index = index*2
			}
			else if(last > this.arr[(index*2)+1]){
				this.arr[index] = this.arr[(index*2)+1]
				this.arr[(index*2)+1] = last
				index = index*2+1
			}
			else{
				break
			}
		}
		return min
	}
}


var minheap = new minHeap()
console.log(minheap.arr)
minheap.insert(2)
console.log(minheap.arr)
minheap.insert(3)
minheap.insert(4)
minheap.insert(9)
minheap.insert(20)
minheap.insert(0)
minheap.insert(92)
minheap.insert(-1)
console.log(minheap.arr)
console.log(minheap.isEmpty())
console.log(minheap.size())
console.log(minheap.contains(10))
console.log(minheap.contains(2))
console.log(minheap.top())
