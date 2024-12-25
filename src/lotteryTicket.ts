function factorial(n: number): number {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function binomialCoefficient(n: number, k: number): number {
    if (k > n || k < 0) return 0;
    return factorial(n) / (factorial(k) * factorial(n - k));
}

function expectedMax(balls: number[], K: number): number {
    balls.sort((a, b) => a - b);
    const n = balls.length;

    let expectedValue = 0;

    for (let i = 0; i < n; i++) {
        const currentBall = balls[i];
        const lessThanCurrent = i;

        const waysToChooseKMinus1 = binomialCoefficient(lessThanCurrent, K - 1);
        const totalWaysToChooseK = binomialCoefficient(n, K);

        const probability = waysToChooseKMinus1 / totalWaysToChooseK;

        expectedValue += currentBall * probability;
    }

    return expectedValue;
}

console.log(expectedMax([10, 10, 10, 10, 10, 10, 10], 3)); // Output: 10.0
console.log(expectedMax([10, 50, 40, 20, 30], 5)); // Output: 50.0
console.log(expectedMax([11, 12, 13, 14, 15, 16, 18], 1)); // Output: 14.142857142857142


// Profa ka thane mos i dergoni me komente


//Time Complexity: approximately ( O(n^2) ) in the worst case
//Space Complexity: ( O(n) )
