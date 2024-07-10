class NumMatrix {
private:
    vector<vector<int>> ps;
public:
    NumMatrix(vector<vector<int>>& matrix) {
        this->ps.reserve(matrix.size());

        for (int i=0;i<matrix.size();i++) {
            vector<int> v(matrix[i].size());
            this->ps.emplace_back(v);
        }

        for(int i=0;i<matrix.size();i++) {
            int prefixSum = 0;
            for (int j=0;j<matrix[i].size();j++) {
                prefixSum+=matrix[i][j];
                this->ps[i][j] = prefixSum;
            }
        }
    }

    int sumRegion(int row1, int col1, int row2, int col2) {
        int ans = 0;
        for (int i=row1;i<=row2;i++) {
            if (col1 == 0) {
                ans += this->ps[i][col2];
            } else {
                ans += this->ps[i][col2] - this->ps[i][max(col1-1, 0)];
            }
        }

        return ans;
    }
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * NumMatrix* obj = new NumMatrix(matrix);
 * int param_1 = obj->sumRegion(row1,col1,row2,col2);
 */
