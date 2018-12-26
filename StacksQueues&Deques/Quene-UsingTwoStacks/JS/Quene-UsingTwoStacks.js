/*
Implement a Queue - Using Two Stacks
Given the Stack class below, implement a Queue class using two stacks! 
Note, this is a "classic" interview problem. Use a Python list data structure as your Stack.
*/

var Queue2Stacks = function() {

  this.inStack=[];
  this.outStack=[];

}

Queue2Stacks.prototype.enqueue = function (value){
  this.inStack.push(value);
}

Queue2Stacks.prototype.dequeue = function (){
  const len = this.inStack.length;

  if (this.outStack.length === 0) {
    for(var i = 0; i < len; i++){
      this.outStack.push(this.inStack.pop());
    }
  } 
  
  return this.outStack.pop();
}


q = new Queue2Stacks();

for (var j =0; j< 5;j++){
  q.enqueue(j);
}  

for (var k =0; k< 5;k++){
  console.log(q.dequeue());
}  
