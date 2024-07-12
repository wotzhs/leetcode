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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
	const q = [];
	const ans = [];

	q.push({ node: root, sum: 0, path: [] });
	while (q.length) {
		let { node, sum, path } = q.shift();
		if (!node) {
			continue;
		}

		sum += node.val;
		path = [...path, node.val];

		if (!node.left && !node.right) {
			if (sum === targetSum) {
				ans.push(path);
				continue;
			}
		}

		if (node.left) {
			q.push({
				node: node.left,
				sum: sum,
				path: path,
			});
		}

		if (node.right) {
			q.push({
				node: node.right,
				sum: sum,
				path: path,
			});
		}
	}

	return ans;
};
