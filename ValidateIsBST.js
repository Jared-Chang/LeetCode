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

function dumpToArray(node, array) {
    if (node == null) return

    dumpToArray(node.left, array)
    array.push(node.val)
    dumpToArray(node.right, array)
}

var isValidBST = function (root) {
    let array = []

    dumpToArray(root, array)

    for (let i in array) {
        if (i != array.length - 1 && array[i] >= array[parseInt(i) + 1]) {
            return false
        }
    }
    return true
};