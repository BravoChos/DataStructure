/*
Fibonnaci Sequence
Problem Statement
Implement a Fibonnaci Sequence in three different ways:

Recursively
Dynamically (Using Memoization to store results)
Iteratively
Remember that a fibonacci sequence: 0,1,1,2,3,5,8,13,21,... starts off with a base case checking to see if n = 0 or 1, then it returns 1.

Else it returns fib(n-1)+fib(n+2).
*/

// method 1 : Recursively
// The recursive solution is exponential time Big-O , with O(2^n). However, its a very simple and basic implementation to consider:

function fib_rec(n){
	//Base Case
	if (n===1 || n ===0){
		return n;
	}
	//Recursion
	return fib_rec(n-1) + fib_rec(n-2);
}

console.log ( fib_rec(10) );
//55

// method 2: Dynamic Programming

// Dynamically
// In the form it is implemented here, the cache is set beforehand and is based on the desired n number of the Fibonacci Sequence. 
// Note how we check it the cache[n] != None, meaning we have a check to know wether or not to keep setting the cache 
// (and more importantly keep cache of old results!)


// Instantiate Cache information
var cache = {}
// print cache

function fib_dyn(n){
	//Base Case
	if (n===1 || n ===0){
		return n;
	}

	if ( cache[n] ) {
		console.log("ok I'll use my good memmory!! ", cache[n]);
		return cache[n]
	}

	//Recursion
	cache[n] = fib_rec(n-1) + fib_rec(n-2);
	return cache[n];
}

console.log( fib_dyn(11));
console.log( fib_dyn(11));


