"""
Implementation of Quick Sort
A quick sort first selects a value, which is called the pivot value. 
Although there are many different ways to choose the pivot value, 
we will simply use the first item in the list. 
The role of the pivot value is to assist with splitting the list. 
The actual position where the pivot value belongs in the final sorted list, 
commonly called the split point, will be used to divide the list for subsequent calls to the quick sort.
"""

def quick_sort(arr): 

  quick_sort_help(arr,0,len(arr)-1)

def quick_sort_help(arr,first,last):
  if first<last:      

    splitpoint = partition(arr,first,last)
    print("2",arr)

    quick_sort_help(arr,first,splitpoint-1)
    quick_sort_help(arr,splitpoint+1,last)


def partition(arr,first,last):

  pivotvalue = arr[first]

  leftmark = first+1
  rightmark = last

  print pivotvalue,leftmark,rightmark

  done = False
  while not done:

    while leftmark <= rightmark and arr[leftmark] <= pivotvalue:
        leftmark = leftmark + 1
        print("l",leftmark)

    while arr[rightmark] >= pivotvalue and rightmark >= leftmark:
        rightmark = rightmark -1
        print("r",rightmark)
    if rightmark < leftmark:
        done = True
    else:
        temp = arr[leftmark]
        arr[leftmark] = arr[rightmark]
        arr[rightmark] = temp
        print "else", arr

  print ('after while loop', arr)
  temp = arr[first]
  arr[first] = arr[rightmark]
  arr[rightmark] = temp
  print('hi',arr, rightmark)

  return rightmark

arr = [2,5,10,6,7,19,1,4,12,11]
quick_sort(arr)
print arr
