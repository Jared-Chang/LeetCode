/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */

var connect = function(root) {
    let array = [];

    let queue = [root];

    while (queue.length > 0)
    {
        let node = queue.shift();

        if (node === null) break;

        array.push(node);
        queue.push(node.left);
        queue.push(node.right);
    }

    for (let i = 0; i < array.length; ++i) {
        array[i].next = i < array.length ? array[i + 1] : null;
    }

    for (let i = 0; array[i] !== undefined; i = 2 * i + 2)
    {
        array[i].next = null;
    }

    return root;
};