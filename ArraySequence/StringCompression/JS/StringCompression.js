// String Compression
// Problem
// Given a string in the form 'AAAABBBBCCCCCDDEEEE' compress it to become 'A4B4C5D2E4'. For this problem, you can falsely "compress" strings of single or double letters. For instance, it is okay for 'AAB' to return 'A2B1' even though this technically takes more space.

// The function should also be case sensitive, so that a string 'AAAaaa' returns 'A3a3'.

// Solution
// Fill out your solution below:
function compress(s) {
  if (s.length === 0) {
    return '';
  }

  if (s.length === 1) {
    return s[0] + 1;
  }

  const l = s.length;
  let r = '';

  // let last = s[0];
  let cnt = 1;
  let i = 1;

  while (i < l) {
    if (s[i] === s[i - 1]) {
      cnt++;
    } else {
      r = r + s[i - 1] + cnt;
      cnt=1;
    }
    i++;
  }
  return r = r + s[i - 1] + cnt; 
}

console.log(compress('AAAAAlBBBBCCCC')) //'A5B4C4'