"""
Implement a Queue
It's very common to be asked to implement a Queue class! The class should be able to do the following:

-Check if Queue is Empty
-Enqueue
-Dequeue
-Return the size of the Queue

"""
class Queue(object):
  def __init__(self):
    self.items = []

  def isEmpty(self):
    return self.items == []

  def enqueue(self, item):
    self.items.insert(0,item)

  def dequeue(self):
    return self.items.pop()

  def size(self):
    return len(self.items)

q = Queue()
q.isEmpty()
q.enqueue(1)
q.enqueue('two')
q.enqueue(3)
q.size()
print(q.dequeue())
print(q.dequeue())
print(q.dequeue())
q.isEmpty()