# -*- coding: utf-8 -*-
"""
Implement a Queue - Using Two Stacks
Given the Stack class below, implement a Queue class using two stacks! 
Note, this is a "classic" interview problem. Use a Python list data structure as your Stack.
"""

class Queue2Stacks(object):
    
  def __init__(self):
    # Two Stacks
    self.in_stack = []
    self.out_stack = []
    
  def enqueue(self, element):
    # FILL OUT CODE HERE
    self.in_stack.append(element)
    pass
  
  def dequeue(self):
    # FILL OUT CODE HERE
    if not self.out_stack:
      while self.in_stack:
          self.out_stack.append(self.in_stack.pop())
    return self.out_stack.pop()
    pass

q = Queue2Stacks()

for i in range(5):
  q.enqueue(i)
    
for i in range(5):
  print (q.dequeue())