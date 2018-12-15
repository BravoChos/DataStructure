// Largest Continuous Sum
// Problem
// Given an array of integers (positive and negative) find the largest continuous sum.

// Solution                =>spent 2hr but no solution... by brain sucks... memorize this
// Fill out your solution below:

function large_cont_sum(arr){
  if (arr.length === 0) {
    return 0
  }

  let currentSum = arr [0];
  let maxSum = arr[0];

  for (i = 1; i <arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum+arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum
}

console.log( large_cont_sum([1,2,-1,3,4,10,10,-10,-1]) );