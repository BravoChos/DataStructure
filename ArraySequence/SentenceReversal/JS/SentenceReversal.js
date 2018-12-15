// Sentence Reversal
// Problem
// Given a string of words, reverse all the words. For example:

// Given:
// 'This is the best'
// Return:
// 'best the is This'

// As part of this exercise you should remove all leading and trailing whitespace. So that inputs such as:

// '  space here'  and 'space here      '
// both become:
// 'here space'

// Solution
// Fill out your solution below:

function rev_word(s) {
  let wordBox = [];
  let length = s.length
  let space = " ";
  let word = '';

  let i = 0 
  while ( i < length ) {
    if ( s[i] != space ) {
      word += s[i];
      i++;

      while ( i<length && s[i] != space){
        word +=s[i];
        i++;
      } 
      wordBox.push(word);
      word = '';
    } 
    i++;
  }
  return wordBox.reverse().join(' ');
}

console.log(rev_word("    Yuna   kim is     super   star. so what? ?   ?YOLO"));