/*
Implement a Deque
Finally, implement a Deque class! It should be able to do the following:

Check if its empty
Add to both front and rear
Remove from Front and Rear
Check the Size
*/

var Deque = function () {
  this.items = [];
}

Deque.prototype.isEmpty = function () {
  return this.items.length ===0;
}

Deque.prototype.addFront = function (value) {
  this.items.push(value);
}

Deque.prototype.addRear = function (value) {
  this.items.splice(0,0, value);
}

Deque.prototype.removeFront = function () {
  return this.items.pop();
}

Deque.prototype.removeRear = function () {
  return this.items.slice(0,1);
}

Deque.prototype.size = function () {
  return this.items.length;
}

deq = new Deque()
console.log( deq.size());
deq.addFront("Hello");
deq.addFront("Bye");
deq.addRear("World");
console.log( deq.removeFront(), deq.removeRear());
console.log( deq.removeRear());
console.log( deq.isEmpty());