/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {

    s = '#' + s.split('').join('#') + '#'

    let result = "";

    for (let i = 1; i < s.length; ++i)
    {
        let j = 1;
        for (; i - j >= 0 && i + j < s.length && s[i - j] === s[i + j]; ++j);
        j--;
        
        if (j * 2 + 1 > result.length)
        {
            result = s.slice(i - j, i + j + 1);
        }
    }

    result = result.replace(/#/g, '');

    return result;
};

console.log(longestPalindrome("aacd"))