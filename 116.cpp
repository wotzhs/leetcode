/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* left;
    Node* right;
    Node* next;

    Node() : val(0), left(NULL), right(NULL), next(NULL) {}

    Node(int _val) : val(_val), left(NULL), right(NULL), next(NULL) {}

    Node(int _val, Node* _left, Node* _right, Node* _next)
        : val(_val), left(_left), right(_right), next(_next) {}
};
*/

class Solution {
public:
    Node* connect(Node* root) {
        queue<Node*> q, tempQ;
        q.emplace(root);

        while(q.size()) {
            Node* node = q.front();
            q.pop();

            if (node == nullptr) {
                continue;
            }

            tempQ.emplace(node);

            while(q.size()) {
                Node* next =  q.front();
                q.pop();
                tempQ.emplace(next);
                node->next = next;
                node = next;
            }

            while(tempQ.size()) {
                Node* entry = tempQ.front();
                tempQ.pop();
                q.emplace(entry->left);
                q.emplace(entry->right);
            }
        }

        return root;
    }
};
