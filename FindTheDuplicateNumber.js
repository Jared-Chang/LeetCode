/**
 * @param {number[]} nums
 * @return {number}
 */

function binarySearch(nums, target, targetIndex, start, end)
{
    if (end < start) return -1;

    let mid = Math.floor((start + end) / 2)

    if (mid !== targetIndex  && nums[mid] ===  target) return target;

    let left = binarySearch(nums, target, targetIndex,  start, mid - 1);
    if (left !== -1) return left

    let right = binarySearch(nums, target, targetIndex,  mid+ 1, end);
    if (right !== -1) return right;

    return -1;
}
var findDuplicate = function(nums) {
    
    for (let i = 0; i < nums.length;  ++i)
    {
        let result = binarySearch(nums, nums[i], i, 0, nums.length - 1);
        if (result !== -1) return result;
    }
    return -1;
};

console.log(findDuplicate([4,5,1,7,0,1,2]))