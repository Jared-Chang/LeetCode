/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {

    let stack = [];

    let node = head;

    while (node !== null) {
        if (node.child !== null) {
            if (node.next !== null) {
                stack.push(node.next);
            }
            node.next = node.child;
            node.next.prev = node;
            node.child = null;
        }
        else if (node.next === null && stack.length !== 0) {
            node.next = stack.pop();
            node.next.prev = node;
        }

        node = node.next;
    }

    return head;
};