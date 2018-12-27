"""
Fibonnaci Sequence
Problem Statement
Implement a Fibonnaci Sequence in three different ways:

Recursively
Dynamically (Using Memoization to store results)
Iteratively
Remember that a fibonacci sequence: 0,1,1,2,3,5,8,13,21,... starts off with a base case checking to see if n = 0 or 1, then it returns 1.

Else it returns fib(n-1)+fib(n+2).
"""

"""
method 1 : Recursively
The recursive solution is exponential time Big-O , with O(2^n). However, its a very simple and basic implementation to consider:
"""

def fib_rec(n):
  
  # Base Case
  if n == 0 or n == 1:
    return n
  # Recursion
  else:
    return fib_rec(n-1) + fib_rec(n-2)  

print fib_rec(10)
#55

print fib_rec(0)

"""
method 2: Dynamic Programming

Dynamically
In the form it is implemented here, the cache is set beforehand and is based on the desired n number of the Fibonacci Sequence. 
Note how we check it the cache[n] != None, meaning we have a check to know wether or not to keep setting the cache 
(and more importantly keep cache of old results!)
"""

# Instantiate Cache information
n = 10
cache = [None] * (n + 1)
# print cache

def fib_dyn(n):
  
  # Base Case
  if n == 0 or n == 1:
    return n
  
  # Check cache
  if cache[n] != None:
    return cache[n]
  
  # Keep setting cache
  cache[n] = fib_dyn(n-1) + fib_dyn(n-2)
  
  return cache[n]

print fib_dyn(10)

"""
method 3: Iteratively
In this solution we can take advantage of Python's tuple unpacking!
"""

def fib_iter(n):
    
  # Set starting point
  a = 0
  b = 1
  
  # Follow algorithm
  for i in range(n):    
    a, b = b, a + b
        
  return a

print fib_iter(23)
#28657