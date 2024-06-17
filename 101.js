
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
 * @return {boolean}
 */

var traverseLeft = (root, stack) => {
	if (!root) {
        stack.push(undefined)
		return;
	}

	stack.push(root.val);
	traverseLeft(root.left, stack);
	traverseLeft(root.right, stack);
};

var traverseRight = (root, stack) => {
	if (!root) {
                stack.push(undefined)

		return;
	}

	stack.push(root.val);
	traverseRight(root.right, stack);
	traverseRight(root.left, stack);
};

var isSymmetric = function (root) {
	var s1 = [];
	var s2 = [];

	if (!root) {
		return true;
	}

	traverseLeft(root.left, s1);
	traverseRight(root.right, s2);

	while (s1.length) {
		const v1 = s1.pop();
		const v2 = s2.pop();

		if (v1 !== v2) {
			return false;
		}
	}

	if (s1.length > 0 || s2.length > 0) {
		return false;
	}

	return true;
};
