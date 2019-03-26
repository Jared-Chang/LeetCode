/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function(s, numRows) {
    if (numRows === 1) { return s; }

    let result = "";

    let totalJump = numRows * 2 - 2;

    for (let i = 0, j = totalJump; i < numRows; ++i, j-=2)
    {
        let jump1 = j === 0 ? totalJump : j;
        let jump2 = totalJump - j === 0 ? totalJump : totalJump - j;

        let k = i;
        let isJump1 = true;
        while (k < s.length)
        {
            result += s[k];
            k += isJump1 ? jump1 : jump2;
            isJump1 = !isJump1;
        }
    }

    return result;
};

console.log(convert("PAYPALISHIRING", 4));