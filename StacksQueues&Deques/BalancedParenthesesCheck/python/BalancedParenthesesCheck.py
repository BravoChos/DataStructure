# -*- coding: utf-8 -*-
"""
Balanced Parentheses Check
Problem Statement
Given a string of opening and closing parentheses, check whether it’s balanced. 
We have 3 types of parentheses: round brackets: (), square brackets: [], and curly brackets: {}. 
Assume that the string doesn’t contain any other character than these, no spaces words or numbers. 
As a reminder, balanced parentheses require every opening parenthesis to be closed in the reverse order opened. 
For example ‘([])’ is balanced but ‘([)]’ is not.

You can assume the input string has no spaces.
"""

def balance_check(s):
  chars = []
  matches = {')':'(',']':'[','}':'{'}
  for c in s:
    if c in matches:
      if chars.pop() != matches[c]:
        return False
    else:
      chars.append(c)
  return chars == []        

print balance_check('[]')
print balance_check('[](){([[[]]])}')
print balance_check('()(){]}')