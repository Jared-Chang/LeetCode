/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
    let stack = [0];

    for (let i = 0; i < S.length; ++i)
    {
        if (S[i] === "(")
        {
            stack.push(0);
        }
        else 
        {
            let sameLevel = stack.pop();
            let parentLevel = stack.pop();

            stack.push(parentLevel + Math.max(sameLevel * 2, 1 ));
        }
    }
    
    return stack[0];
};

scoreOfParentheses("(()()(()))")