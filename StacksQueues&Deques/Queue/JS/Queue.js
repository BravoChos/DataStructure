/*
Implement a Queue
It's very common to be asked to implement a Queue class! The class should be able to do the following:

-Check if Queue is Empty
-Enqueue
-Dequeue
-Return the size of the Queue
*/

var Queue = function () {
  this.items = [];
}

Queue.prototype.isEmpty = function() {
  return this.items.length === 0;
}

Queue.prototype.enqueue = function(value) {
  this.items.splice(0,0,value);
}

Queue.prototype.dequeue = function() {
  return this.items.pop();
}

Queue.prototype.size = function() {
  return this.items.length;
}

q = new Queue();
console.log(q.isEmpty());
q.enqueue(1);
q.enqueue('two');
console.log(q.items);
console.log(q.size());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.isEmpty())