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
    vector<int> rightSideView(TreeNode* root) {
        queue<TreeNode*> q, tmp;
        q.emplace(root);
        vector<int> ans;

        while (q.size()) {
            TreeNode* front = q.front();
            q.pop();

            if (front == nullptr) {
                continue;
            }

            if (front->left != nullptr) {
                tmp.emplace(front->left);
            }

            if (front->right != nullptr) {
                tmp.emplace(front->right);
            }

            while(q.size()) {
                front = q.front();
                q.pop();

                if (front->left != nullptr) {
                    tmp.emplace(front->left);
                }

                if (front->right != nullptr) {
                    tmp.emplace(front->right);
                }
            }

            while (tmp.size()) {
                TreeNode* node = tmp.front();
                tmp.pop();
                q.emplace(node);
            }

            ans.emplace_back(front->val);
        }

        return ans;
    }
};
