/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    let map = {};
    nums.map(num => num.toString()).forEach(num => { map[num] > 0 ? map[num]++ : map[num] = 1; });
    
    let pairList = [];
    Object.keys(map).map(key => {
        let pair  = {};
        pair[key] = map[key];
        pairList.push(pair);
    });

    pairList.sort((a, b) => { return Object.values(b)[0] - Object.values(a)[0]; })

    let result = [];
    for (let i = 0; i < k; ++i)
    {
        result.push(Object.keys(pairList[i])[0]);
    }

    return result;
};

console.log(topKFrequent([4,1,-1,2,-1,2,3], 2))