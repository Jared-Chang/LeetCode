/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {

    let stack = [];
    let result = [];

    for (let i = T.length - 1; i >= 0; --i)
    {
        while(stack.length !== 0 && T[i] >= T[stack[stack.length - 1]]) stack.pop();
        result[i] = stack.length === 0 ? 0 : stack[stack.length - 1] - i;
        stack.push(i);
    }
    
    return result;
};