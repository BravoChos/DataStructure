"""
Implementation of a Bubble Sort
The bubble sort makes multiple passes through a list. It compares adjacent items and exchanges those that are out of order.
Each pass through the list places the next largest value in its proper place. In essence, each item bubbles up to the location where it belongs.
"""

def bubble_sort(arr):
  swaped=True
  i = 0

  while i < len(arr)-1:
    if arr[i] > arr[i+1]:
      swap = arr[i]
      arr[i] = arr[i+1]
      arr[i+1]=swap
      swaped = True
    #   swaped=False
    if i == len(arr)-2:
      if swaped:
        i = 0 
        swaped = False
      else:
        return arr
    else:
      i +=1

arr = [3,2,13,4,6,5,7,8,1,20]
print bubble_sort(arr)

def bubble_sort2(arr):
    # For every element (arranged backwards)
    for n in range(len(arr)-1,0,-1):
        #
        for k in range(n):
            # If we come to a point to switch
            if arr[k]>arr[k+1]:
                temp = arr[k]
                arr[k] = arr[k+1]
                arr[k+1] = temp

arr = [3,2,13,4,9,5,7,8,1]
bubble_sort2(arr)
print arr