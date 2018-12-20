/*
Implementation of Shell Sort
The shell sort improves on the insertion sort by breaking the original list into a number of smaller sublists, each of which is sorted using an insertion sort. The unique way that these sublists are chosen is the key to the shell sort. Instead of breaking the list into sublists of contiguous items, the shell sort uses an increment i, sometimes called the gap, to create a sublist by choosing all items that are i items apart.
*/

function shell_sort(arr) {
    let sublistcount = parseInt(arr.length/2);
    // console.log(sublistcount)
    while ( sublistcount > 0) {
			for (var i=0; i<arr.length; i++){
				gap_insertion_sort(arr,i,sublistcount)
			}
			sublistcount = parseInt(sublistcount / 2);
			console.log(sublistcount,"sdd")
		}
}

function gap_insertion_sort(arr,start,gap){ 
	// console.log(start+gap)

	for(var j =(start+gap); j<arr.length; j+=gap){
		// console.log("Sdfsdfsdf",j);
		let currentValue = arr[j];
		position = j;

		while (position>=gap && arr[position-gap]>currentValue) {
			arr[position]=arr[position-gap];
			position = position-gap;
		}

		arr[position]=currentValue;
	}
}


arr = [45,67,23,45,21,24,7,2,6,4,90]
shell_sort(arr)
console.log (arr);