function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function binomialCoefficient(n, k) {
    if (k > n || k < 0) return 0;
    return factorial(n) / (factorial(k) * factorial(n - k));
}

function expectedMax(balls, K) {
    balls.sort((a, b) => a - b);
    const n = balls.length;

    let expectedValue = 0;

    // Calculate the expected maximum
    for (let i = 0; i < n; i++) {
        const currentBall = balls[i];
        // Count how many balls are less than the current ball
        const lessThanCurrent = i; // All balls before i are less than balls[i]

        // Calculate the number of ways to choose K-1 balls from the less than current
        const waysToChooseKMinus1 = binomialCoefficient(lessThanCurrent, K - 1);
        // Calculate the total ways to choose K balls from n balls
        const totalWaysToChooseK = binomialCoefficient(n, K);

        // Probability that currentBall is the maximum
        const probability = waysToChooseKMinus1 / totalWaysToChooseK;

        // Add to the expected value
        expectedValue += currentBall * probability;
    }

    return expectedValue;
}

console.log(expectedMax([10, 10, 10, 10, 10, 10, 10], 3)); // Output: 10.0
console.log(expectedMax([10, 50, 40, 20, 30], 5)); // Output: 50.0
console.log(expectedMax([11, 12, 13, 14, 15, 16, 18], 1)); // Output: 14.142857142857142
