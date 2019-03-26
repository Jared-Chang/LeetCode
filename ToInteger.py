import re

class Solution:

    def myAtoi(self, str):
        numberString = re.match('(^ *[-\+]?\d+)', str)
        
        if not numberString:
            return 0
        
        numberString = numberString.group()
        
        result = int(numberString)
        
        isMinus = result < 0
        maxint = (2**31)
        if isMinus and result < -maxint:
            return -maxint
        elif (not isMinus) and result >= maxint:
            return maxint-1
        
        return result
        