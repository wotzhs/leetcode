class NumArray {
private:
    vector<int> ps;

public:
    NumArray(vector<int>& nums) {
        this->ps.reserve(nums.size());

        int prefixSum = 0 ;

        for (int i=0;i<nums.size();i++) {
            prefixSum+=nums[i];
            ps[i] = prefixSum;
        }
    }

    int sumRange(int left, int right) {
        if (left == 0) {
            return this->ps[right];
        }

        return this->ps[right] - this->ps[max(left-1, 0)];
    }
};

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray* obj = new NumArray(nums);
 * int param_1 = obj->sumRange(left,right);
 */
