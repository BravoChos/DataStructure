/*
Implementation of Merge Sort
Merge sort is a recursive algorithm that continually splits a list in half. 
If the list is empty or has one item, it is sorted by definition (the base case). 
If the list has more than one item, we split the list and recursively invoke a merge sort on both halves. 
Once the two halves are sorted, the fundamental operation, called a merge, is performed. 
Merging is the process of taking two smaller sorted lists and combining them together into a single, sorted, new list.
*/
p = 0;

function merge_sort(arr) {
	let mid = Math.floor(arr.length / 2);
	let lefthalf = arr.slice(0, mid); //arr[:mid] => only python
	let righthalf = arr.slice(mid);
	// console.log(lefthalf, righthalf)

	if (arr.length > 1) {

		merge_sort(lefthalf);
		merge_sort(righthalf);

		i = 0;
		j = 0;
		k = 0;


		while (i < lefthalf.length && j < righthalf.length) {
			if (lefthalf[i] < righthalf[j]) {
				arr[k] = lefthalf[i];
				i++;
			} else {
				arr[k] = righthalf[j];
				j++;
			}

			k += 1;
		}

		while (i<lefthalf.length){
			arr[k] = lefthalf[i];
			i++;
			k++;
		}

		while (j<righthalf.length){
			arr[k] = righthalf[j];
			j++;
			k++;
		}
	}

	console.log(p," hello", arr);
  p++;
}

arr = [11, 2, 5, 4, 7, 6, 8, 1, 23];
merge_sort(arr);
console.log(arr);

function merge_sort2(array) {
  if ( array.length <=1 ) {
    return array;
  }
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  return merge(merge_sort2(left), merge_sort2(right));
}

function merge(left, right) {
  let mergedArray = []
  while (left.length || right.length) {
    if (left[0] <= right[0] || !right.length) {
      mergedArray.push(left.shift());
    } else {
      mergedArray.push(right.shift());
    }
  }
  return mergedArray;
}
let array = [5,4];
merge_sort2(array);

console.log(array)
console.log(merge( [2,3,4,5], [1] ))
