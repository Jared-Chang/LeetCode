/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */

function toCountArray(str) {
    
    let count = Array(26).fill(0);
    
    for (let char of str)
    {
        count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }
    
    return count;
}

function toCountArrayWithWord(str) {
    let count = toCountArray(str);

    return {count: count, str: str};
}

function maxCountArray(a, b)
{
    for (let i in a)
    {
        a[i] = Math.max(b[i], a[i]);
    }

    return a;
}

function matchCount(a, b)
{
    for (let i in a)
    {
        if (a[i] < b[i])
        {
            return false;
        }
    }

    return true;
}

var wordSubsets = function(A, B) {
    
    let bMaxCount = B.map(toCountArray)
                     .reduce(maxCountArray);

    return A.map(toCountArrayWithWord)
            .filter(({count}) => {
                return matchCount(count, bMaxCount);
            })
            .map(({str}) => str);
};

console.log(JSON.stringify(wordSubsets(["amazon","apple","facebook","google","leetcode"], ["ec","oc",  "ceo"])));