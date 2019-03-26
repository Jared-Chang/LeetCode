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
var detectCycle = function(head) {
    if (!head) return null;
    
    let tortoise = head;
    let rubby = head;
    
    do {
        if (tortoise.next)
        {
            tortoise = tortoise.next;
        }
        else
        {
            return null;
        }

        if (rubby.next && rubby.next.next)
        {
            rubby = rubby.next.next
        }
        else
        {
            return null;
        }
    } while (tortoise != rubby)
        
    tortoise = head;

    for (;tortoise != rubby; )
    {
        tortoise = tortoise.next;
        rubby = rubby.next;
    }
    
    return tortoise;
};