/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) { return []; }

    let queue = [root];
    let result = [];

    while (queue.length > 0)
    {
        let levelNodeAmount = queue.length;
        let subResult = [];

        for (let i = 0; i < levelNodeAmount; ++i)
        {
            let node = queue.shift();
            subResult.push(node.val);
            
            for (const direction of ["left", "right"]) {
                if (node[direction]) { queue.push(node[direction]); }
            }
        }

        result.push(subResult);
    }

    result.map((subResult, level) => {
        if (level % 2 === 0)
        {
            return subResult;
        }
        else
        {
            return subResult.reverse();
        }
    })

    return result;
 };