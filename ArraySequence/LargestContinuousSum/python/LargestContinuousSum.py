#!/usr/bin/env python
# coding=utf8

# Largest Continuous Sum
# Problem
# Given an array of integers (positive and negative) find the largest continuous sum.

# Solution                =>spent 2hr but no solution... by brain sucks... memorize this
# Fill out your solution below:
def large_cont_sum(arr): 

  if ( len(arr) == 0 ):
    return False

  currentSum = maxSum = arr[0] #currentSum, maxSum = arr[0]; this is wrong!
  
  for item in arr[1:]:
    # Set current sum as the higher of the two
    currentSum = max(currentSum + item, item)
    # Set max as the higher between the currentSum and the current max
    maxSum = max( maxSum, currentSum )

  return maxSum

print( large_cont_sum([1,2,-1,3,4,10,10,-10,-1]) ) #29

