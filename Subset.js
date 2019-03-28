/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function getSubsets(nums, depth, x, y, tempSet, resultSet)
{
    if (y === depth)
    {
        resultSet.push(JSON.parse(JSON.stringify(tempSet)));
        return;
    }

    for (let i = x; i < nums.length; ++i)
    {
        tempSet.push(nums[i]);
        getSubsets(nums, depth, i + 1, y + 1, tempSet, resultSet);
        tempSet.pop();
    }
}

var subsets = function(nums) {
    let resultSet = [];
    
    for (let depth = 0; depth <= nums.length; ++depth)
    {
        getSubsets(nums, depth, 0, 0, [], resultSet);
    }

    return resultSet;
};

console.log(JSON.stringify(subsets([1, 2, 3])))