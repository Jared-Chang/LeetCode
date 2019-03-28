/**
 * @param {number[]} nums
 * @return {string}
 */

function compString(a, b) {
    return a + b > b + a ? -1 : 1;
}

var largestNumber = function (nums) {
    let result = nums.map(num => num.toString())
        .sort(compString)
        .join('');

    return parseInt(result) === 0 ? "0" : result;
};

console.log(largestNumber([824, 938, 1399, 5607, 6973, 5703, 9609, 4398, 8247]));