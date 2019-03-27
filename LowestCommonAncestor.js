/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// function postorder(node, parent)
// {
//     if (node === null)
//     {
//         return;
//     }

//     postorder(node.left, node);
//     postorder(node.right, node);
//     node.next = parent;
// }

var lowestCommonAncestor = function(root, p, q) {

    if (!root || root === p || root === q) return root;
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    return !left ? right : !right ? left : root;

    // postorder(root, null);

    // let pAncestor = [];

    // while (p !== null)
    // {
    //     pAncestor.push(p);
    //     p = p.next;
    // }
    
    // while (q !== null)
    // {
    //     if (pAncestor.includes(q))
    //     {
    //         return q;
    //     }
    //     q = q.next;
    // }

    // return root;
};