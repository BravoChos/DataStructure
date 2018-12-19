"""
Implementation of Insertion Sort
Insertion Sort builds the final sorted array (or list) one item at a time. 
It is much less efficient on large lists than more advanced algorithms 
such as quicksort, heapsort, or merge sort.
"""
def insertion_sort(arr):
  # For every index in array
  for i in range(1, len(arr)):
     # Set current values and position
    currentValue = arr[i]
    position = i
    # Sorted Sublist
    while position > 0 and arr[position-1] > currentValue:
      arr[position] = arr[position-1]
      position = position - 1
    arr[position]=currentValue
  
arr =[3,5,4,6,8,1,2,12,41,25]
insertion_sort(arr)
print arr


