/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function count(s, c)
{
    let counter = 0;
    for (let char of s)
        {
            if (char === c) counter++;
        }
    
    return counter;
}

var longestSubstring = function(s, k) {
    let set = new Set(s.split(''));
    
    for (let c of set)
        {
            if (count(s, c) < k)
            {
                return Math.max.apply(null, s.split(c).map(sub => longestSubstring(sub, k)));
            }
        }
    return s.length;
};

console.log(longestSubstring("aaabb", 3))