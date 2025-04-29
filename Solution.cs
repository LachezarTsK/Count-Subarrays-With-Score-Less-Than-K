
public class Solution
{
    public long CountSubarrays(int[] input, long scoreNotToBeExceeded)
    {
        long numberOfSubarrays = 0;
        long sum = 0;

        int front = 0;
        int back = 0;

        while (front < input.Length)
        {
            sum += input[front];
            while (GetScore(front, back, sum) >= scoreNotToBeExceeded)
            {
                sum -= input[back];
                ++back;
            }
            numberOfSubarrays += (front - back + 1);
            ++front;
        }

        return numberOfSubarrays;
    }

    private long GetScore(int front, int back, long sum)
    {
        return (front - back + 1) * sum;
    }
}
