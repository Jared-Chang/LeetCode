/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function build(preorder, inorder, preorderCounter) {
    if (inorder.length === 0) return null;

    let root = new TreeNode(preorder[preorderCounter[0]]);
    let rootIndex = inorder.indexOf(preorder[preorderCounter[0]]);
    preorderCounter[0]++;

    root.left = build(preorder, inorder.slice(0, rootIndex), preorderCounter);
    root.right = build(preorder, inorder.slice(rootIndex + 1, inorder.length), preorderCounter);
    
    return root;
}

var buildTree = function (preorder, inorder) {
    let preorderCounter = [0];
    let root = build(preorder, inorder, preorderCounter);
    return root;
};

console.log(JSON.stringify(buildTree([-1], [-1])));