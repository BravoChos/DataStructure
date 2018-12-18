/*
Implementation of Selection Sort
The selection sort improves on the bubble sort by making only one exchange for every pass through the list.
In order to do this, a selection sort looks for the largest value as it makes a pass and, after completing the pass, 
places it in the proper location. As with a bubble sort, after the first pass, the largest item is in the correct place. 
After the second pass, the next largest is in place. This process continues and requires n−1 passes to sort n items, 
since the final item must be in place after the (n−1) st pass.
*/

function selection_sort(arr){
  let length = arr.length;


  while(length > 0) {
    let position = 0;
    let largest = arr[0];

    for (var i = 1; i<length; i++) {
      if ( largest < arr[i] ) {
        largest = arr[i];
        position = i;

      } 
    }

    swap = arr[length-1];
    arr[length-1] = largest;
    arr[position] = swap;
    length -=1;
  }
}

arr = [3,5,2,7,6,8,12,40,21];
selection_sort(arr);
console.log(arr);