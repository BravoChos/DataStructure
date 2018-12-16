"""
Unique Characters in String
Problem
Given a string,determine if it is compreised of all unique characters. For example, the string 'abcde' has all unique characters and should return True. The string 'aabcde' contains duplicate characters and should return false.

Solution
Fill out your solution below:
"""
def uni_char(s):
  letters=set()     # letters = set([])
  # print(letters)
  for letter in s:
    if (letter in letters):
      return False
    else:
      letters.add(letter) #add~set vs append~[]
  return True

print( uni_char('goo') )
print( uni_char('abcdefg') )

def uni_char2(s):  
  # print(set(s)) #set(['a', 'c', 'b', 'e', 'd', 'g', 'f'])
  # print(s)

  return len(set(s)) == len(s)

print( uni_char2('goo') )
print( uni_char2('abcdefg') )