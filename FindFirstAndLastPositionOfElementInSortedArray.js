/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function binarySearch(array, target, start, end) {
    if (start > end) { return -1; }

    let mid = Math.floor((start + end) / 2);

    if (array[mid] === target) { return mid; }

    if (array[mid] > target)
    {
        return binarySearch (array, target, start, mid - 1)
    }
    else
    {
        return binarySearch (array, target, mid + 1, end)
    }
}

var searchRange = function (nums, target) {
    let index = binarySearch(nums, target, 0, nums.length - 1);

    if (index === -1) { return [-1, -1]; }

    let start = index;
    let end = index;

    for (;start >= 0 && nums[start] === target; start--);
    for (;end < nums.length && nums[end] === target; end++);

    return [start + 1, end - 1];
}

console.log(JSON.stringify(searchRange([5,7,7,8,8,10], 8)))