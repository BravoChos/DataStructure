"""
Implement a Stack
A very common interview question is to begin by just implementing a Stack! Try your best to implement your own stack!

It should have the methods:

Check if its empty
-Push a new item
-Pop an item
-Peek at the top item
-Return the size

"""

class Stack(object):
    
  def __init__(self):
      self.items = []

  def isEmpty(self):
      return self.items == []

  def push(self, item):
      self.items.append(item)

  def pop(self):
      return self.items.pop()

  def peek(self):
      return self.items[len(self.items)-1]

  def size(self):
      return len(self.items)


s = Stack()
print s.isEmpty()
s.push("hello")
print s.peek()
s.push("bye ")
print s.peek()
print s.size()
print s.isEmpty()
print s.pop()
print s.pop()
print s.isEmpty()