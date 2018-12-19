/*
Implementation of Insertion Sort
Insertion Sort builds the final sorted array (or list) one item at a time. 
It is much less efficient on large lists than more advanced algorithms 
such as quicksort, heapsort, or merge sort.
*/
function insertion_sort(arr){
  for(var i = 0; i <arr.length; i++){
    currentValue = arr[i];
    position = i;
      while ( position>0 && arr[position-1]> currentValue) {
        arr[position] = arr[position-1];
        position = position-1
      }
      arr[position] = currentValue;
  }
}

arr =[3,5,4,6,8,1,2,12,41,25];
insertion_sort(arr);
console.log(arr);