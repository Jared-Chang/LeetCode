/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
    
    let node = head;

    let nodes = [];

    while (node !== null)
    {
        nodes.push(node);
        node = node.next;

        if (nodes.length > n + 1) {
            nodes.shift();
        }
    }
    
    if (nodes.length === n)
    {
        return nodes[1] === undefined ? null : nodes[1];
    }
    else
    {
        nodes[0].next = nodes[2];
    }

    return head;
};
