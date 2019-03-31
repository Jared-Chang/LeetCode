/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    let abSum = {};
    for (let i = 0; i < A.length; ++i)
    {
        for (let j = 0; j < B.length; ++j)
        {
            if(!abSum[A[i]+B[j]])
            {
                abSum[A[i]+B[j]] = 1;
            }
            else
            {
                abSum[A[i]+B[j]]++;
            }
        }
    }

    let result = 0;
    for (let i = 0; i < C.length; ++i)
    {
        for (let j = 0; j < D.length; ++j)
        {
            let key = -C[i] - D[j];
            let value = abSum[key];
            result += value ? value : 0;
        }
    }

    return result;
};

console.log(fourSumCount([1,2],
    [-2,-1],
    [-1,2],
    [0,2]))