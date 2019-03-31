/**
 * @param {number[]} nums
 * @return {number}
 */

function binarySearch(nums, start, end)
{
    if (start > end)
    {
        return -1;
    }
    
    let mid = Math.floor((start + end) / 2);
    
    if (nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1])
    {
        return mid;
    }
    
    let result = binarySearch(nums, start, mid - 1);
    if (result !== -1)
    {
        return result;
    }
    else 
    {
        return binarySearch(nums, mid + 1, end);
    }
}

var findPeakElement = function(nums) {
    nums.unshift(-Infinity);
    nums.push(-Infinity)
    
    let result = binarySearch(nums, 1, nums.length-2);

    return result === -1 ? -1 : result - 1;
};

console.log(findPeakElement([1,2,1,3,5,6,4]))