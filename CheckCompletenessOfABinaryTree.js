/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isCompleteTree = function(root) {
    let levelOrder = [];
    
    let queue = [root];

    while (queue.length > 0)
    {
        let numberOfNodes = queue.length;
        
        for (let i = 0; i < numberOfNodes; ++i)
        {
            let node = queue.shift();
            levelOrder.push(node);
            if (!node) { continue; }
            
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    
    let node;
    while (!(node = levelOrder.pop()));
    levelOrder.push(node);
    
    return levelOrder.indexOf(null) === -1;
};