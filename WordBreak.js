/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

var wordBreak = function(s, wordDict) {
    let table = Array(s.length + 1).fill(false);

    table[0] = true;

    for (let i = 1; i <= s.length; ++i)
    {
        for (let j = 0; j < i; ++j)
        {
            if (table[j]) 
            {
                if (wordDict.includes(s.substring(j, i))) 
                {
                    table[i] = true;
                }
            }
        }
    }

    return table[s.length];
};

console.log(wordBreak("leetcode", ["leet", "code"]))