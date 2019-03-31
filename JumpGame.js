/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(steps) {
    let goalPos = steps.length - 1;

    for(let pos = steps.length - 2; pos >= 0; --pos)
    {
        if (pos + steps[pos] >= goalPos)
        {
            goalPos = pos;
        }
    }

    return goalPos === 0;
};
