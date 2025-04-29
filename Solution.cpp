
#include <vector>
using namespace std;

class Solution {

public:
    long long countSubarrays(const vector<int>& input, long long scoreNotToBeExceeded) const {
        long long numberOfSubarrays = 0;
        long long sum = 0;

        int front = 0;
        int back = 0;

        while (front < input.size()) {

            sum += input[front];
            while (getScore(front, back, sum) >= scoreNotToBeExceeded) {
                sum -= input[back];
                ++back;
            }
            numberOfSubarrays += (front - back + 1);
            ++front;
        }

        return numberOfSubarrays;
    }

private:
    long long getScore(int front, int back, long sum) const {
        return (front - back + 1) * sum;
    }
};
