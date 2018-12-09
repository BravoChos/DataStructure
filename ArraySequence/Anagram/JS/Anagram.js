/*
	Anagramatic
	
	Write a function that takes in two strings and determines if they are anagrams of each other. Something is an anagram of something else if it is made up of the same characters.
	
	For example ekez is an anagram of zeke. zkee is also an anagram of zeke.
	
	Your function should return true or false.
	
	    anagram('zeke', 'hello world');
	    // -> false
	
	    anagram('nick', 'ncki');
	    // -> true
*/

function anagram(word1, word2) {
	word1 = word1.split('');
	word2 = word2.split('');

	if ( word1.length === word2.length ) {
		for (var i = 0; i < word1.length; i++) {
			if (word2.indexOf(word1[i]) > -1) {
				word2.splice(word2.indexOf(word1[i]), 1);
				if (word2.length === 0) {
					return true;
				}
			} else {
				return false;
			}
		}
	} else {
		return false;
	}
}

console.log(anagram('nick', 'ncki'));
console.log(anagram('zeke', 'zeak'));
