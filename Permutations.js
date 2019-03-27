/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function formString(array, y, marks, resultList, result)
{
    if (y === array.length)
    {
        if (resultList.length > 0) result.push(JSON.parse(JSON.stringify(resultList)));

        return;
    }

    for (let i = 0; i < array[y].length; ++i)
    {
        if (marks[i]) { continue; }
        marks[i] = true;
        resultList.push(array[y][i]);
        formString(array, y + 1, marks, resultList, result);
        resultList.pop();
        marks[i] = false;
    }
}

var permute = function(nums) {
    
    let array = Array.from({length: nums.length}, e => Array.from(nums));
    let marks = Array.from({length: nums.length}, e => false);
    
    let result = [];
    formString(array, 0, marks, [], result);
    
    return result;
};

console.log(permute([1, 2, 3]))