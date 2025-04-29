
class Solution {

    fun countSubarrays(input: IntArray, scoreNotToBeExceeded: Long): Long {
        var numberOfSubarrays: Long = 0
        var sum: Long = 0

        var front = 0
        var back = 0

        while (front < input.size) {

            sum += input[front]
            while (getScore(front, back, sum) >= scoreNotToBeExceeded) {
                sum -= input[back]
                ++back
            }
            numberOfSubarrays += (front - back + 1)
            ++front
        }

        return numberOfSubarrays
    }

    private fun getScore(front: Int, back: Int, sum: Long): Long {
        return (front - back + 1) * sum
    }
}
