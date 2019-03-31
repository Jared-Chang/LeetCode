/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length === 0) return 0
        
    let dp = Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; ++i)
    {
        let max = 0;
        for (let j = 0; j < i; ++j)
        {
            if (nums[j] < nums[i] && dp[j] > max)
            {
                max = dp[j];
            }
        }
        dp[i] += max;
    }

    return Math.max.apply(null, dp);
};