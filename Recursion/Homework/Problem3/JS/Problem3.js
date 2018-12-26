/*
Problem 3
Note, this is a more advanced problem than the previous two! 
It aso has a lot of variation possibilities and we're ignoring strict requirements here.

Create a function called word_split() which takes in a string phrase and a set list_of_words. 
The function will then determine if it is possible to split the string in a way in which words can be made from the list of words. 
You can assume the phrase will only contain words found in the dictionary if it is completely splittable.

For example:
word_split('themanran',['the','ran','man'])
['the', 'man', 'ran']

word_split('ilovedogsJohn',['i','am','a','dogs','lover','love','John'])
['i', 'love', 'dogs', 'John']

word_split('themanran',['clown','ran','man'])
[]
*/

function word_split(phrase, list_of_words) {
  let output =[];
  let p = phrase.split("");

  var r = function (phrase, list_of_words, output) {
    for(i in list_of_words){

      let split = true;
      let j = 0;
      while( j < list_of_words[i].length && split === true) {
        if(phrase[j] !== list_of_words[i][j]){
          split = false;
        }
        j++;
      }

      if (split) {
        output.push(list_of_words[i]);
        return r (phrase.slice(list_of_words[i].length), list_of_words, output)
      }
    }
  }
  r(p,list_of_words,output);

  return output
}

console.log( word_split('themanran',['the','ran','man']));
// # ['the', 'man', 'ran']

console.log( word_split('ilovedogsJohn',['i','am','a','dogs','lover','love','John']));
// # ['i', 'love', 'dogs', 'John']

console.log( word_split('themanran',['clown','ran','man']));
// # []