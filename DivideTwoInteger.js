/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    
    let isMinus = (dividend < 0) ^ (divisor < 0);
    
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    
    let result = 0;
    
    while (dividend >= divisor) {
        let t = divisor, p = 1;
        while (dividend > (t << 1)) {
            t <<= 1;
            p <<= 1;
        }
        result += p;
        dividend -= t;
    }
    
    let maxInt = Math.pow(2, 31);
    
    if (result >= maxInt)
    {
        return isMinus ? 0 - maxInt : maxInt - 1;
    }
    else
    {
        return isMinus ? 0 - result : result;
    }
};