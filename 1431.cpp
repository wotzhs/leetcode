class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        int mx = 0;
        vector<bool> ans(candies.size());
        for (int i = 0; i < candies.size(); i++) {
            if (candies[i] > mx) {
                mx = candies[i];
            }
        }

        for (int i = 0; i < candies.size(); i++) {

            ans[i] = candies[i] + extraCandies >= mx;
        }

        return ans;
    }
};
