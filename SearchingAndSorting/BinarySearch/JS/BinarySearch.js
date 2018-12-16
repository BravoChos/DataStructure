//Implementation of Binary Search
function binary_search(arr, ele) {
  let start = 0;
  let end = arr.length - 1;

  let found = false;

  while (start <= end && found == false) {
    mid = parseInt( (start + end) / 2); //if you dont parse int, it will give the decimal num as well.
    // console.log(mid, arr[mid]);
    if (arr[mid] == ele) {
      found = true;
    } else {
      if (arr[mid] > ele) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return found
}

// list must already be sorted!
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(binary_search(arr, 4))
console.log(binary_search(arr, 2.2))


// Recursive Version of Binary Search
function rec_bin_search(arr, ele) {
  if (arr.length ===0 ) {
    return false;
  }

  mid = arr.length/2;
  
  if (arr[mid]===ele) {
    return true;
  } else {
    if( arr[mid]>ele){
      return rec_bin_search( arr.splice(0, mid-1), ele);
    } else {
      return rec_bin_search( arr.splice(mid+1, 2*mid), ele);
    }
  }
}

console.log(rec_bin_search(arr, 3))
console.log(rec_bin_search(arr, 15))