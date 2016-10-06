function SLNode(val){
  this.val = val;
  this.next = null;
}

function SLList(){
  this.head = null;
  
  this.insert = function(node){
    if(!this.head){
      this.head = node;
      return this.head;
    } else {
      var current = this.head;
      while(current.next){
        current = current.next
      }
      current.next = node;
      return this.head;
    }
  }
  
  this.back = function(){
    if(!this.head){
      return null;
    }
    var runner = this.head;
    while(runner.next){
      runner = runner.next;
    }
    return runner.val;
  }

  this.pushBack = function(val){
    var node = new SLNode(val);
    if(!this.head){
      this.head = node;
    } else {
      var runner = this.head;
      while(runner.next){
        runner = runner.next;
      }
      runner.next = node;
    }
  }

  this.popBack = function(){
    if(!this.head){
      return null;
    }
    var returnVal;
    if(!this.head.next){
      returnVal = this.head.val;
      this.head = null;
      return returnVal;
    } 
    var runner = this.head;  
    while(runner.next.next){
      runner = runner.next;
    }
    returnVal = runner.next.val;
    runner.next = null;
    return returnVal;
  }

  this.pushFront = function(val){
    var oldHead = this.head;
    this.head = new SLNode(val)
    this.head.next = oldHead;
  }

  this.popFront = function(){
    if(!this.head){
      return null;
    }
    var returnVal = this.head.val;
    this.head = this.head.next
    return returnVal;
  }

  this.contains = function(val){
    var runner = this.head;
    while(runner){
      if(runner.val === val){
        return true;
      }
      runner = runner.next;
    }
    return false;
  }

  this.removeVal = function(val){
    if(!this.head){
      return false;
    }
    if(this.head.val === val){
      this.head = this.head.next;
      return true;
    }
    var runner = this.head;
    while(runner.next){
      if(runner.next.val === val){
        runner.next = runner.next.next;
        return true;
      }
      runner = runner.next;
    }
    return false;
  }

  this.bubblesort = function(){
    var end = null;
    while(this.head != end){
      var prev = this.head
      var current = this.head
      var trav = current.next
      var bool = true;
      while(current.next != end){
        if(current.val > trav.val && current == this.head){
           current.next = trav.next
           trav.next = current
           this.head = trav;
           trav = current.next
           prev = this.head
           bool=false
        }
        else if(current.val > trav.val){
          prev.next = trav;
          current.next = trav.next;
          trav.next = current;
          prev = trav;
          trav = current.next;
          bool = false;
        }
        else{
          current = trav
          trav = current.next
          if(prev.next != current){
            prev = prev.next
          }
        }
      }
      if(bool){
        break;
      }
      end = current;
    }
  }
}


var node1 = new SLNode(4)
var node2 = new SLNode(5)
var node3 = new SLNode(2)
var node4 = new SLNode(6)
var node5 = new SLNode(0)

var list = new SLList()
list.insert(node1)
list.insert(node2)
list.insert(node4)
list.insert(node5)
list.insert(node3)
list.bubblesort()
console.log(list)