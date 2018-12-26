"""
Problem2
Given an integer, create a function which returns the sum of all the individual digits in that integer. 
For example: if n = 4321, return 4+3+2+1
"""

def rec_sum(n):

  if n>10:
    return n % 10 + rec_sum(n/10)
  else:
    return n
  pass

print rec_sum(135)

