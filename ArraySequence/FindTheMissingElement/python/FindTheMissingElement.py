# Find the Missing Element
# Problem
# Consider an array of non-negative integers. 
# A second array is formed by shuffling the elements of the first array and deleting a random element. 
# Given these two arrays, find which element is missing in the second array.

# Here is an example input, the first array is shuffled and the number 5 is removed to construct the second array.

# Input:

# finder([1,2,3,4,5,6,7],[3,7,2,1,4,6])

# Output:

# 5 is the missing number

# Solution
# Fill out your solution below:

# def finder(arr1,arr2):
#   for item in arr1:
#     print(item,"item")
#     if ( arr2.index(item) == None ): #null in JS  #can't approach this method. ValueError: .. is not in list

def finder(arr1,arr2):
    
    # Sort the arrays
    arr1.sort()
    arr2.sort()
    
    # Compare elements in the sorted arrays
    for num1, num2 in zip(arr1,arr2):
        if num1!= num2:
            return num1
    
    # Otherwise return last element
    return arr1[-1]

arr1 = [1,2,3,4,5,6,7]
arr2 = [3,7,2,1,4,6]
print(finder(arr1,arr2)) #5

import collections #global name

def finder2(arr1, arr2): 
    
    # Using default dict to avoid key errors
    d=collections.defaultdict(int)       # if no
    print(d)
    # Add a count for every instance in Array 1
    for num in arr2:
        print(d)
        d[num]+=1 
    
    # Check if num not in dictionary
    for num in arr1: 
        if d[num]==0: 
            print('adasdasdas',d)   #if new key value comes in? it seems its not undefined but set to 0
            return num 
        
        # Otherwise, subtract a count
        else: d[num]-=1 

arr1 = [5,5,9,7]
arr2 = [5,5,7,7]

print(  finder2(arr1,arr2) )#9