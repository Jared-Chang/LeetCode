/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function binarySearch(nums, target, start, end)
{
    if (end < start) return -1;

    let mid = Math.floor((start + end) / 2)

    if (nums[mid] ===  target) return mid;

    if (nums[start] < nums[mid] && nums[start] <= target && target < nums[mid])
    {
        return binarySearch(nums, target, start, mid - 1);
    }
    else if (nums[mid] < nums[end] && nums[mid] < target && target <= nums[end])
    {
        return binarySearch(nums, target, mid+ 1, end);
    }
    else if (nums[mid] > nums[end])
    {
        return binarySearch(nums, target, mid + 1, end);
    }
    else
    {
        return binarySearch(nums, target, start, mid - 1);
    }

    return -1;
}

var search = function(nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1);
};

console.log(search([4,5,6,7,0,1,2], 0))