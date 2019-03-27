/**
 * @param {string} s
 * @return {number}
 */

const piority = {"*": 1, "/": 1, "+": 0, "-": 0, "#": -1}

function isNumber(str)
{
    return str.match(/^\d*/)[0].length > 0;
}

function getNumber(str)
{
    return str.match(/^\d*/)[0];
}

function parseToken(str)
{
    let tokens = [];

    while(str.length !== 0)
    {
        let token = getNumber(str);

        if (token.length === 0)
        {
            token = str[0];
        }
        
        tokens.push(token)
        str = str.slice(token.length, str.length);
    }

    return tokens;
}

function converteToPrefix(tokens) {

    let stack = ['#'];
    let prefix = [];

    tokens.forEach((token, index) => {
        let isNumber = index % 2 == 0;

        if (isNumber)
        {
            prefix.push(token);
        }
        else 
        {
            let last = stack[stack.length - 1];

            while (piority[last] >= piority[token])
            {
                prefix.push(stack.pop());
                last = stack[stack.length - 1];
            }

            stack.push(token);
        }
    });

    while (stack.length > 1)
    {
        prefix.push(stack.pop());
    }

    return prefix;
}

function calculatePrefix(prefix)
{
    let numbers = [];

    prefix.forEach((token) =>
    {
        if (isNumber(token))
        {
            numbers.push(parseInt(token))
        }
        else
        {
            let operend2 = numbers.pop();
            let operend1 = numbers.pop();

            switch(token)
            {
                case "+":
                    numbers.push(operend1 + operend2)
                break;
                case "-":
                    numbers.push(operend1 - operend2)
                break;
                case "/":
                    numbers.push(Math.floor(operend1 / operend2))
                break;
                case "*":
                    numbers.push(operend1 * operend2)
                break;
            }
        }
    });

    return numbers.pop();
}

var calculate = function(s) {
    s = s.replace(/ /g, "");
    let tokens = parseToken(s);
    let prefix = converteToPrefix(tokens);

    return calculatePrefix(prefix);
};

console.log(calculate("1-1+1"))