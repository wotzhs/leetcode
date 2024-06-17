class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        int n = word1.length() + word2.length();
        int w1i = 0, w2i = 0;

        std::string ans = "";

        while (w1i+w2i < n) {
            if (w1i<word1.length()) {
                ans += word1[w1i++];
            }

            if (w2i<word2.length()) {
                ans += word2[w2i++];
            }
        }

        return ans;
    }
};
