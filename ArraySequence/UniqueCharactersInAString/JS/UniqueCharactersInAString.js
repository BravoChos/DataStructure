/*
Unique Characters in String
Problem
Given a string,determine if it is compreised of all unique characters. For example, the string 'abcde' has all unique characters and should return True. The string 'aabcde' contains duplicate characters and should return false.

Solution
Fill out your solution below:
*/
function uni_char(s) {
  let letters = {};

  for (var i = 0; i < s.length; i++) {
    if (letters[s[i]]) {
      return false;
    } else {
      letters[s[i]]=1;
    }
  }
  return true;
}

console.log(uni_char('goo'));
console.log(uni_char('abcdefg'));