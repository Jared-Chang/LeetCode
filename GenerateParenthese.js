/**
 * @param {number} n
 * @return {string[]}
 */

function formArray(result, resultString, left, right, n)
{
    if (left + right === n * 2)
    {
        result.push(resultString);
        return
    }
    
    if (left < n)
    {
        formArray(result, resultString + "(", left+1, right, n);
    }
    
    if (right < left)
    {
        formArray(result, resultString + ")", left, right+1, n);
    }
}

var generateParenthesis = function(n) {
    let result = [];
    
    formArray(result, "", 0, 0, n);
    
    return result
};