/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b)

    let result = 999999999;

    for (let i = 0; i < nums.length - 2; ++i)
    {
        if (i > 0 && nums[i] === nums[i - 1]) { continue; }

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k)
        {
            if (j > i + 1 && nums[j] === nums[j - 1])
            {
                j++;
                continue;
            }

            let sum = nums[i] + nums[j] + nums[k];

            if (Math.abs(sum - target) < Math.abs(result - target))
            {
                result = sum;
            }

            if (sum < target) 
            {
                j++;
            }
            else if (sum > target)
            {
                k--;
            }
            else
            {
                return sum;
            }
        }
    }

    return result
};

console.log(JSON.stringify(threeSumClosest([0, 1, 2], 0)))