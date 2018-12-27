"""
Reverse a String
This interview question requires you to reverse a string using recursion. 
Make sure to think of the base case here.

Again, make sure you use recursion to accomplish this. 
Do not slice (e.g. string[::-1]) or use iteration, there must be a recursive call for the function.
"""
def reverse(s, result = None):
  
  if result is None:
    result = []

  if len(s)>1:
    s = list(s)
    # print s
    result.append(s.pop())
    s = "".join(s)
    # print result
    return reverse(s, result)
  else:
    result.append(s[0])
    print result
    return "".join(result)

print reverse('hello world')
#'dlrow olleh'

def reverse2(s):
  
  #Base Case
  if len(s) <=1:
    return s
  #Recursion
  return reverse2(s[1:])+s[0]

print reverse2('hello world')
#'dlrow olleh'