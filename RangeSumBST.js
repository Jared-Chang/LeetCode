/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

function dumpToArray(node, array) {
    if (node == null) return

    dumpToArray(node.left, array)
    array.push(node.val)
    dumpToArray(node.right, array)
}

var rangeSumBST = function(root, L, R) {

    let array = [];

    dumpToArray(root, array);

    return array.slice(array.indexOf(L), array.indexOf(R) + 1)
         .reduce((value, total) => { return value + total});
};

console.log(rangeSumBST())