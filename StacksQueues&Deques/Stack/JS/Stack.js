/*
Implement a Stack
A very common interview question is to begin by just implementing a Stack! Try your best to implement your own stack!

It should have the methods:

Check if its empty
-Push a new item
-Pop an item
-Peek at the top item
-Return the size
*/

var Stack = function () {
  this.items = [];
}

Stack.prototype.isEmpty = function(){
  return this.items.length === 0
}

Stack.prototype.push = function(value){
  this.items.push(value);
}

Stack.prototype.pop = function(){
  return this.items.pop();
}

Stack.prototype.peek = function(){
  return this.items[this.items.length-1];
}

Stack.prototype.size = function(){
  return this.items.length;
}

let t = new Stack();
console.log(t.isEmpty());
t.push(11);
t.push(22);
t.push(34);
console.log(t.pop());
console.log(t.peek())
console.log(t.size())
