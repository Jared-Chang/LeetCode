/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = []
    
    let totalSum = nums.reduce((total, num) => { return num * total; }, 1);
    
    result = nums.map((num, i) => {
        return (num === 0) ? 
              nums.reduce((total, num2, i2) => { if (i2 !== i) return total * num2; return total; }, 1)
             : totalSum / num;
    });
    
    return result;
};

console.log(productExceptSelf([0, 0]))