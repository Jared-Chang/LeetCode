/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let left = Infinity;
    let mid = Infinity;

    for (let i = 0; i < nums.length; ++i)
    {
        const num = nums[i];
        if (num <= left) { left = num; }
        else if (num <= mid) { mid = num; }
        else return true;
    }

    return false;
};

console.log(increasingTriplet([5,1,5,5,2,5,4]))