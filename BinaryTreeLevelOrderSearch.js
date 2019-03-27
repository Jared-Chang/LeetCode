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

    let level = 0;
    let levelNodes = 1;
    
    let result = []
    let temp = []
    let curCount = 1
    
    while (queue.length > 0)
    {
        if (curCount > levelNodes)
        {
            level++;
            levelNodes = Math.pow(2, level);
            curCount = 1;
            result.push(temp);
            temp = []
        }

        let front = queue.shift();
        
        curCount++;
        if (front === null) continue;
        
        queue.push(front.left);
        queue.push(front.right);
        temp.push(front.val);
    }
    
    if (temp.length > 0)
        result.push(temp);

    return result;
};