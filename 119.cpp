#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<int> getRow(int numRows) {
        vector<vector<int>> ans{
            {1},
        };

        for (int i=1; i<numRows+1;i++) {
            vector<int> row;
            row.emplace_back(1);
            for (int j=1; j<ans[i-1].size();j++) {
                row.emplace_back(ans[i-1][j-1]+ans[i-1][j]);
            }

            row.emplace_back(1);
            ans.emplace_back(row);
        }
        return ans[ans.size()-1];
    }
};
