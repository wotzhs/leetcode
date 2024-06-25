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
 * @return {TreeNode}
 */

var dfs = (root, rs) => {
	if (root.right) {
		dfs(root.right, rs);
	}

	rs.sum += root.val;
	root.val = rs.sum;

	if (root.left) {
		dfs(root.left, rs);
	}
};

var bstToGst = function (root) {
	dfs(root, { sum: 0 });
	return root;
};
