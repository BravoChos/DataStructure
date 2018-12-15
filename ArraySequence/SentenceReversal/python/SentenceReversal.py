# Sentence Reversal
# Problem
# Given a string of words, reverse all the words. For example:

# Given:
# 'This is the best'
# Return:
# 'best the is This'

# As part of this exercise you should remove all leading and trailing whitespace. So that inputs such as:

# '  space here'  and 'space here      '
# both become:
# 'here space'

# Solution
# Fill out your solution below:

def rev_word(s):
  if len(s) == 0:
    return 0
  
  wordBox = []
  word = ''


  s = s.split(' ')
  if s[0] == ' ':
    s= s[1:]

  for item in s:
    if item != '':
      wordBox.insert(0,item)   #append vs insert(0,1) ((prepend))

  result = wordBox[0]
  for word in wordBox[1:]:
    result += " " + word
  return result


print ( rev_word('  Hi John,   are you ready to go?   ') ) #'go? to ready you are John, Hi'
print ( rev_word('   space before ') ) #'before space'


def rev_word2(s):
  # result = s.split()
  # result = list(reversed(s.split())) #reversed(somthing)itself returns obj not printable
  # print(result)
  # result = "".join(result)
  # print(result)

  return " ".join( reversed( s.split() ) )

print ( rev_word2('  Sup yura,   are you ready?   ') ) #'go? to ready you are John, Hi'

def rev_word3(s):
  return " ".join( s.split()[::-1] )

print ( rev_word3('  Bye John,   are you ready to go  ?   ') ) #'go? to ready you are John, Hi'

def rev_word4(s):
    """
    Manually doing the splits on the spaces.
    """
    
    words = []
    length = len(s)
    spaces = [' ']
    
    # Index Tracker
    i = 0
    
    # While index is less than length of string
    while i < length:
        
        # If element isn't a space
        if s[i] not in spaces:
            
            # The word starts at this index
            word_start = i
            
            while i < length and s[i] not in spaces:
                
                # Get index where word ends
                i += 1
            # Append that word to the list
            words.append(s[word_start:i])
        # Add to index
        i += 1
        
    # Join the reversed words
    return " ".join(reversed(words))
print( rev_word4('   Hello John    how are you ok   ') )
