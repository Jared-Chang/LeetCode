/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function swap (array, i, j)
{
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

var sortColors = function(nums) {

    let start = 0;
    let end = nums.length - 1;

    for (let i = 0; end >= i && i < nums.length;)
    {
        switch(nums[i])
        {
            case 0:
                swap(nums, i, start++);
            break;
            case 1:
                ++i;
            break;
            case 2:
                swap(nums, i, end--);
            break;
        }
        if (i < start) i++;
    }
};

sortColors([1, 0])