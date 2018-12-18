

def selection_sort(arr):
  length = len(arr)
  position = 0

  while length > 0:
    i=1
    largest= arr[0]

    for num in arr[1:length]:
      if largest < num:
        largest = num
        position = i
      i+=1

    swap = arr[length-1]
    arr[length-1] = largest
    arr[position] = swap
    length -=1


arr = [3,5,2,7,6,8,12,40,21]
selection_sort(arr)
print arr

def selection_sort2(arr): 
  # For every slot in array
  for fillslot in range(len(arr)-1,0,-1):   #range(start, stop, step (-1 means reverse order))
    positionOfMax=0
    # For every set of 0 to fillslot+1
    for location in range(1,fillslot+1):
      # Set maximum's location
      if arr[location]>arr[positionOfMax]:
        positionOfMax = location

    temp = arr[fillslot]
    arr[fillslot] = arr[positionOfMax]
    arr[positionOfMax] = temp

arr = [3,5,2,7,6,8,12,40,21]
selection_sort2(arr)
print arr

# test = range(5,2,-1)
# print test
# test = range(1,3)
# print test