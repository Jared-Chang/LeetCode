/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    nums.sort((a, b) => b-a);

    let begin = Math.floor(nums.length/2);
    let end = nums.length % 2 === 0 ? nums.length : nums.length - 1;
    for (let i = begin; i < end; i++)
    {
        let big = nums.shift();
        nums.splice(i, 0, big);
    }
};

wiggleSort([1,5,1,1,6,4])