/**
 * @param {number} num
 * @return {string}
 */

const hexMap = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

function hexSub(a, b)
{
    return (a.charCodeAt(0) - b.charCodeAt(0) + 'a'.charCodeAt(0)).toString();
}

var toHex = function(num) {
    if (num === 0)
    {
        return "0";
    }

    let isMinus = num < 0;

    num = Math.abs(num);

    let result = [];

    while (num != 0)
    {
        result.unshift(hexMap[num % 16]);
        num = Math.floor(num / 16);
    }

    if (isMinus)
    {
        for (let i = 0; i < 8 - result.length; i++) {
            result.unshift('0');
        }
        
        for (let i = 0; i < result.length; i++) {
            result = hexSub
            
        }
    }

    return result.join('');
};