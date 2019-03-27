/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function inorderTraverse(node, result)
{
    if (node === null) { return; }

    inorderTraverse(node.left, result)
    result.push(node.val);
    inorderTraverse(node.right, result)
}

var inorderTraversal = function(root) {
    let result = [];

    inorderTraverse(root, result);

    return result;
};