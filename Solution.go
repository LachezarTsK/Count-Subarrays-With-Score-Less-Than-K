
func countSubarrays(input []int, scoreNotToBeExceeded int64) int64 {
    var numberOfSubarrays int64 = 0
    var sum int64 = 0

    var front = 0
    var back = 0

    for front < len(input) {

        sum += int64(input[front])
        for getScore(front, back, sum) >= scoreNotToBeExceeded {
            sum -= int64(input[back])
            back++
        }
        numberOfSubarrays += int64(front - back + 1)
        front++
    }

    return numberOfSubarrays
}

func getScore(front int, back int, sum int64) int64 {
    return int64(front-back+1) * sum
}
