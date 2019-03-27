/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {

    let odd = new ListNode(0);
    let oddNode = odd;
    let even = new ListNode(0);
    let evenNode = even;

    let isOdd = true;

    let node = head;

    while (node !== null)
    {
        if (isOdd)
        {
            oddNode.next = node;
            oddNode = node;
        }
        else
        {
            evenNode.next = node;
            evenNode = node;
        }

        node = node.next;
        
        isOdd = !isOdd;
    }
    
    evenNode.next = null;
    oddNode.next = even.next;
    
    return head;
};