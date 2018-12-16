#Implementation of Binary Search
def binary_search(arr,ele):
  startIndex = 0
  endIndex = len(arr)-1

  found = False

  while startIndex <= endIndex and not found:

    midIndex = (startIndex+endIndex)/2

    if ( arr[midIndex] == ele):
      found=True
    else:
      if ( arr[midIndex] > ele ):
        endIndex = midIndex-1
      else:
        startIndex=midIndex+1
  
  return found 

# list must already be sorted!
arr = [1,2,3,4,5,6,7,8,9,10]
print binary_search(arr,4)
print binary_search(arr,2.2)


#Recursive Version of Binary Search
def rec_bin_search(arr,ele): 
  # Base Case!
  if len(arr) == 0:
    return False
  
  # Recursive Case
  else:
    mid = len(arr)/2
        
    # If match found
    if arr[mid]==ele:
      return True
       
    else:      
      # Call again on second half
      if ele<arr[mid]:
        return rec_bin_search(arr[:mid],ele) #do not fortet to return it!           
        # Or call on first half
      else:
        return rec_bin_search(arr[mid+1:],ele)

print rec_bin_search(arr,3)
print rec_bin_search(arr,15)