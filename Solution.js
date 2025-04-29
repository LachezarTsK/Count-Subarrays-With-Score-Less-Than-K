
/**
 * @param {number[]} input
 * @param {number} scoreNotToBeExceeded
 * @return {number}
 */
var countSubarrays = function (input, scoreNotToBeExceeded) {
    let numberOfSubarrays = 0;
    let sum = 0;

    let front = 0;
    let back = 0;

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
};

/**
 * @param {number} front
 * @param {number} back
 * @param {number} sum
 * @return {number}
 */
function getScore(front, back, sum) {
    return (front - back + 1) * sum;
}
