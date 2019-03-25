/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {

    let count = 0
    let maxLength = 0

    let left = 0
    let right = 0

    let substring = new Set()

    while (right != s.length) {

        if (!substring.has(s[right])) {

            substring.add(s[right])
            right++
            count++
        }
        else {
            let leftChar = s[left];
            substring.delete(leftChar)
            left++
            count--
        }

        if (count > maxLength) {
            maxLength = count
        }
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring("dvdf"));