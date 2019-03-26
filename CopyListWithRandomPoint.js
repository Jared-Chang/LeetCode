/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */

function formNode(val)
{
    return {val: val, next: null, random: null};
}

var copyRandomList = function(head) {
    
    let node = head;
    let resultNodes = [];

    for (let id = 0; node !== null; id++, node = node.next)
    {
        node["id"] = id;
        resultNodes.push(formNode(node.val));
    }
    node = head;
    resultNodes.push(null);

    let resultHead = resultNodes[0];
    let resultNode = resultHead

    for (let i = 0; node !== null; i++, node = node.next, resultNode = resultNodes[i])
    {
        resultNode.next = resultNodes[i + 1];
        resultNode.random = node.random === null ? null : resultNodes[node.random.id];
    }

    return resultHead;
};