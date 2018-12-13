// Find the Missing Element
// Problem
// Consider an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.
// Here is an example input, the first array is shuffled and the number 5 is removed to construct the second array.

// Input:

// finder([1,2,3,4,5,6,7],[3,7,2,1,4,6])

// Output:

// 5 is the missing number

// Solution
// Fill out your solution below:

function finder(arr1,arr2) {
  arr1=arr1.sort();
  arr2=arr2.sort();

  for (var i=0; i < arr1.length; i++ ) {
    if (arr1[i] !== arr2[i]) {
      return arr1[i];
    }
  }

  return true; 
}
    
console.log( finder( [1,2,4,5], [1,2,4,7]));

function finder2(arr1,arr2) {
  let obj = {}

  for (var i=0; i < arr2.length; i++ ) {
    if (obj[arr2[j]]) {
      obj[arr2[i]] += 1;     
    } else {
      obj[arr2[i]] = 1; 
    }
  }

  for (var j=0; j < arr1.length; j++ ) {
    if (obj[arr1[j]] === 0 || !obj[arr1[j]] ) {
      return arr1[j];
    } else {
      obj[arr1[j]] -= 1;
    }
  }
  return null;
}
    
console.log( finder2( [1,2,4,5], [1,2,4,7]));
