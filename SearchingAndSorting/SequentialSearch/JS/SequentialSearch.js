//Sequential Search

function seq_search(arr, ele) {
	/*
	General Sequential Search. Works on Unordered lists.
	*/
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === ele) {
			return true;
		}
	}
	return false;
}


arr = [1, 9, 2, 8, 3, 4, 7, 5, 6];
console.log(seq_search(arr, 1));
console.log(seq_search(arr, 10));

// #Ordered List
function seq_search2(arr, ele) {
	/*
	General Sequential Search. Works on Unordered lists.
	*/
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === ele) {
			return true;
		} else if (arr[i] > ele) {
			console.log(i, arr[i],"so stop here");
			return false
		}
	}
	return false;
}

arr = [1, 9, 2, 8, 3, 4, 7, 5, 6];
arr.sort();
console.log(seq_search2(arr, 2.3));
console.log(seq_search2(arr, 9));
