#include <bits/stdc++.h>
using namespace std;
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution {
public:
    int sumNumbers(TreeNode* root) {
        queue<pair<TreeNode*, int>> q;
        int ans = 0;

        if (root->left == nullptr && root->right == nullptr) {
            return root->val;
        }

        q.emplace(make_pair(root->left, root->val));
        q.emplace(make_pair(root->right, root->val));

        while(q.size()) {
            pair<TreeNode*, int> p = q.front();
            q.pop();

            if (p.first == nullptr) {
                continue;
            }

            int carry = p.second*10+p.first->val ;

            if (p.first->left == nullptr && p.first->right == nullptr) {
                ans += carry;
            }

            if (p.first->left != nullptr) {
                q.emplace(p.first->left, carry);
            }

            if (p.first->right != nullptr) {
                q.emplace(p.first->right, carry);
            }

        }

        return ans;
    }
};
