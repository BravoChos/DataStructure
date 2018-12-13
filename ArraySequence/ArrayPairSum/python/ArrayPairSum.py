# ArrayPairSum Check
# Problem
# Given an integer array, output all the unique pairs that sum up to a specific value k.

# So the input:
# pair_sum([1,3,2,2],4)
# would return 2 pairs:

#  (1,3)
#  (2,2)

# note: FOR TESTING PURPOSES CHANGE YOUR FUNCTION SO IT OUTPUTS THE NUMBER OF PAIRS
# Solution
# Fill out your solution below:

def pair_sum(arr,k):
  arr = sorted(arr) # not ARRAY.sort()
  leftIndex=0
  rightIndex=len(arr)-1

  if len(arr)<2:
    return False # capital F in Pyhon!!
  twoSum= arr[leftIndex] + arr[rightIndex]
  while (leftIndex != rightIndex):
    if (twoSum == k):
      return True
    elif (twoSum < k):
      leftIndex += 1 #leftIndex++ => nope! 
    else:
      rightIndex -= 1

print( pair_sum([1,3,2,2],4) ) #2