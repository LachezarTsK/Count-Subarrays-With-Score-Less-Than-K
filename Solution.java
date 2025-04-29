
public class Solution {

    public long countSubarrays(int[] input, long scoreNotToBeExceeded) {
        long numberOfSubarrays = 0;
        long sum = 0;

        int front = 0;
        int back = 0;

        while (front < input.length) {

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

    private long getScore(int front, int back, long sum) {
        return (front - back + 1) * sum;
    }
}
