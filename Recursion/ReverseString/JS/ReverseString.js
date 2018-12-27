/*
Reverse a String
This interview question requires you to reverse a string using recursion. 
Make sure to think of the base case here.

Again, make sure you use recursion to accomplish this. 
Do not slice (e.g. string[::-1]) or use iteration, there must be a recursive call for the function.
*/

function reverse(s){
	if(s.length ===1){
		return s;
	}

	return reverse(s.slice(1)) + s[0];  //splice only works for array
}

console.log(reverse('hello world'));
//'dlrow olleh'
console.log(reverse('abc'));