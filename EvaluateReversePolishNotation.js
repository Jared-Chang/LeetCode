/**
 * @param {string[]} tokens
 * @return {number}
 */
function isNumber(str)
{
    return !isNaN(str);
}

var evalRPN = function(tokens) {
    let stack = [];

    for (let i = 0; i < tokens.length; ++i)
    {
        if (isNumber(tokens[i]))
        {
            stack.push(parseInt(tokens[i]));
        }
        else
        {
            let second = stack.pop();
            let first = stack.pop();
            switch(tokens[i])
            {
                case "+":
                    stack.push(first + second)
                break;
                case "-":
                stack.push(first - second)
                break;
                case "*":
                stack.push(first * second)
                break;
                case "/":
                stack.push((first/second) > 0 ? Math.floor(first / second) :  Math.ceil(first / second))
                break;
            }
        }
    }

    return stack.pop();
};

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))