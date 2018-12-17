/*
Implementation of a Bubble Sort
The bubble sort makes multiple passes through a list. It compares adjacent items and exchanges those that are out of order.
Each pass through the list places the next largest value in its proper place. In essence, each item bubbles up to the location where it belongs.
*/

function bubble_sort(arr){
	let len = arr.length;
	let swaped = false;
	let bubble = false;

	while (!swaped) {
		for (var i=0; i < len-1; i++) {
			if (arr[i]>arr[i+1]){
				swap=arr[i]
				arr[i] = arr[i+1];
				arr[i+1] = swap;
				bubble = true;
			}
		}
		if (bubble) {
			bubble=false;
			len -= 1;		
		} else {
			swaped = true;
		}
	}
	return arr;
}


arr = [3,2,13,4,6,5,7,8,1,20]
console.log( bubble_sort(arr) );

