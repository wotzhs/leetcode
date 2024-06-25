/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
	const q = [];
	let ans = 0;
	q.push(root);
	while (q.length) {
		const node = q.shift();
		if (node.val >= low && node.val <= high) {
			ans += node.val;
		}
		if (node.left) {
			q.push(node.left);
		}
		if (node.right) {
			q.push(node.right);
		}
	}

	return ans;
};
