/*
Coin Change Problem
Note: This problem has multiple solutions and is a classic problem in showing issues with basic recursion. 
If you are having trouble with this problem (or it seems to be taking a long time to run in some cases) 
check out the Solution Notebook and fully read the conclusion link for a detailed description of the various ways to solve this problem!
This problem is common enough that is actually has its own Wikipedia Entry!

Problem Statement
Given a target amount n and a list (array) of distinct coin values, what's the fewest coins needed to make the change amount.

For example:

If n = 10 and coins = [1,5,10]. Then there are 4 possible ways to make change:

1+1+1+1+1+1+1+1+1+1
5 + 1+1+1+1+1
5+5
10

With 1 coin being the minimum amount.

please read below documentation!!
http://interactivepython.org/runestone/static/pythonds/Recursion/DynamicProgramming.html

Solution
Implement your solution below:
*/
function rec_coin(target,coins){
  let min_coins = target;

  if (!coins.indexOf(target)){
    return 1;
  }

  for(var i=0; i<coins.length; i++){
    if( coins[i] <= target){
      num_coins = 1 + rec_coin(target-coins[i], coins);

      if (num_coins < min_coins) {
        min_coins = num_coins;
      }

    }
  }

  return min_coins;
}
      
console.log(rec_coin(10,[1,5]));
2

function rec_coin_dynam (target, coins) {
  let known_results ={};

  return rec_coin_dynam_help( target, coins, known_results );
}

function rec_coin_dynam_help( target, coins, known_results ) {
  let min_coins = target;

  index = coins.indexOf(target)
  if (!index){
    known_results[target] = 1;
    return 1;
  }else if(known_results[target]){
    return known_results[target];
  } else {
    for(var i=0; i<coins.length; i++){
      if( coins[i] <= target){
        num_coins = 1 + rec_coin_dynam_help(target-coins[i], coins, known_results);
        if (num_coins < min_coins) {
          min_coins = num_coins;
          known_results[target] = min_coins;
        }
      }
    }
  }

  return min_coins;
}

console.log( rec_coin_dynam(74,[1,5,10,25]))
//8