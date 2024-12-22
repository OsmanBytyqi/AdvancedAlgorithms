function monteCarloSimulation(
    balls: number[],
    K: number,
    simulations: number = 100000
): number {
    let n: number = balls.length;
    let sum: number = 0;
    for (let i = 0; i < simulations; i++) {
        let selected: number[] = [];
        while (selected.length < K) {
            let index: number = Math.floor(Math.random() * n);
            selected.push(balls[index]);
        }
        sum += Math.max(...selected);
    }
    return sum / simulations;
}

let balls1: number[] = [10, 10, 10, 10, 10, 10, 10];
let K1: number = 3;
console.log(monteCarloSimulation(balls1, K1));

let balls2: number[] = [10, 50, 40, 20, 30];
let K2: number = 5;
console.log(monteCarloSimulation(balls2, K2));

let balls3: number[] = [11, 12, 13, 14, 15, 16, 18];
let K3: number = 1;
console.log(monteCarloSimulation(balls3, K3));
