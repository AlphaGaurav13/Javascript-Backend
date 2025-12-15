// author:  White_Lion
// Created: 2025-11-13 13:04:24
#include <bits/stdc++.h>
using namespace std;

int maxOperations(string s) {
        int count = 0;

        for(int i = s.size() - 1; i>= s.size() / 2;i--) {
            if(s[i] == '0' and s[i - 1] == '1') {
                swap(s[i], s[i - 1]);
                count++;
            }
        }

        for(int i = 0; i < s.size()/2 - 1; i++) {
            if(s[i] == '1' and s[i + 1] == '0') {
                swap(s[i], s[i + 1]);
                count++;
            }
        }
        return count;

        // return std::to_string(count);

    }


int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    string  temp = "1001101";
    cout << maxOperations(temp) << "\n";
    return 0;
    //0100111
}