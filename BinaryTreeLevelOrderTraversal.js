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

var levelOrder = function(root) {
    if (root === null) return [];
    
    let queue = [root];
    
    let result = []
    
    while (queue.length > 0)
    {
        let temp = []
        let currentLeveSize = queue.length;
        for (let i = 0; i < currentLeveSize; ++i)
        {
            let front = queue.shift();
    
            temp.push(front.val);
            if (front.left)
            {
                queue.push(front.left)
            }
            if (front.right)
            {
                queue.push(front.right)
            }
        }
        result.push(temp);
    }
    
    return result;
};