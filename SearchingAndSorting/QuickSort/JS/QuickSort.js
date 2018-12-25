/*
Implementation of Quick Sort
A quick sort first selects a value, which is called the pivot value. 
Although there are many different ways to choose the pivot value, 
we will simply use the first item in the list. 
The role of the pivot value is to assist with splitting the list. 
The actual position where the pivot value belongs in the final sorted list, 
commonly called the split point, will be used to divide the list for subsequent calls to the quick sort.
*/

function quickSort(arr) {

  first = 0;
  last = arr.length -1;

  var r = function (arr, first, last) {
    if (first < last) {
      splitPoint = partition(arr,first,last);

      r(arr,first,splitPoint-1);
      r(arr,splitPoint+1,last);
    }
  }
  r (arr, first, last);

}


function partition (arr, first,last) {
  let pivotValue = arr[first];
  leftIndex = first+1;
  rightIndex = last;

  done  = false;

  while (!done) {
    while (leftIndex <= rightIndex && arr[leftIndex] <= pivotValue) {
      leftIndex++;
    }
  
    while (rightIndex >= leftIndex && arr[rightIndex] >= pivotValue) {
      rightIndex--;
    }

    if (leftIndex > rightIndex ) {
      done = true;
    } else {
      temp = arr[leftIndex];
      arr[leftIndex] = arr[rightIndex];
      arr[rightIndex] = temp;
    }
  }
 
  temp = arr[rightIndex];
  arr[rightIndex] = arr[first];
  arr[first] = temp

  return rightIndex; 
}

arr = [2,5,4,6,7,3,1,19,12,11];
quickSort(arr);
console.log(arr);
