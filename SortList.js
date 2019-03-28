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
function dumpToArray(node)
{
    let array = [];
    while(node !== null)
    {
        array.push(node.val);
        node = node.next;
    }
    return array;
}

function formLinkedList(array)
{
    let dummy = new ListNode(0);
    let node = dummy;
    for (let val of array)
    {
        node.next = new ListNode(val);
        node = node.next;
    }
    return dummy;
}

var sortList = function(head) {
    let array = dumpToArray(head);
    array.sort((a, b) => {return a-b});
    return formLinkedList(array).next;
};