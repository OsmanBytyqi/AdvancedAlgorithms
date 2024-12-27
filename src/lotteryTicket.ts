function precomputeBinomialCoefficients(n: number, k: number): number[][] {
    const C: number[][] = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));

    for (let i = 0; i <= n; i++) {
        C[i][0] = 1;
        for (let j = 1; j <= Math.min(i, k); j++) {
            C[i][j] = C[i - 1][j - 1] + C[i - 1][j];
        }
    }

    return C;
}

function expectedMax(balls: number[], K: number): number {
    balls.sort((a, b) => a - b);
    const n = balls.length;

    const binomialCoefficients = precomputeBinomialCoefficients(n, K);

    let expectedValue = 0;

    for (let i = 0; i < n; i++) {
        const currentBall = balls[i];
        const lessThanCurrent = i;

        const waysToChooseKMinus1 = binomialCoefficients[lessThanCurrent][K - 1];
        const totalWaysToChooseK = binomialCoefficients[n][K];

        const probability = waysToChooseKMinus1 / totalWaysToChooseK;

        expectedValue += currentBall * probability;
    }

    return expectedValue;
}

console.log(expectedMax([10, 10, 10, 10, 10, 10, 10], 3)); // Output: 10.0
console.log(expectedMax([10, 50, 40, 20, 30], 5)); // Output: 50.0
console.log(expectedMax([11, 12, 13, 14, 15, 16, 18], 1)); // Output: 14.142857142857142

