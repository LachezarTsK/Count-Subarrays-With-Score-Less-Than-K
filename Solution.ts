
function countSubarrays(input: number[], scoreNotToBeExceeded: number): number {
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

function getScore(front: number, back: number, sum: number): number {
    return (front - back + 1) * sum;
}
