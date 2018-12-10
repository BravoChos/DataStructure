/*
ArrayPairSum

Given an array of numbers sorted in ascending order (least to greatest), 
and a separate number (a "sum"), determine if any 2 numbers in the array add up to the sum.
Return true if any 2 different numbers within the array add up to sum. 
Return false if no 2 numbers in the array add up to sum. 
*/

//you solution starts here;

function pairSum(arr, target) {
  for (var i=0; i < arr.length; i++ ) {
    for (var j=i+1; j< arr.length; j++) {
      let sum = arr[i]+ arr[j];
      if (sum === target) {
        return true;
      }
    }
  }
  return false
}

console.log( pairSum( [1,2,4,5], 7));

// //question: if we had a pointer on each end and the sum of the 2 numbers was less than the target 
// //what adjustment would we want to make? answer: move left pointer up one 
// // optimized version
function pairSum2(arr, target) {
	var leftIdx = 0, rightIdx = arr.length - 1;
	
	if (arr.length < 2) return false; // edge case
	
	while (leftIdx !== rightIdx) {
      var currSum = arr[leftIdx] + arr[rightIdx];
      			
			if (currSum === target) return true;
			else if (currSum < target) leftIdx++;
			else rightIdx--;
	}	
	return false
}

console.log(pairSum([1, 1, 2, 3, 4, 5], 7) ) // Should return true
console.log(pairSum2([1, 2, 3, 4, 5], 9) ) // Should return true
console.log(pairSum([1, 2, 3, 7, 8], 7) ) // Should return false
console.log(pairSum2([1, 2, 3, 4, 5], 2) ) // Should return false
