# Advanced Algorithms: Dynamic Programming and Monte Carlo Simulation

## Problem Description
This project solves the following problem using two different approaches:

There is an urn containing some balls. On each ball, there is a positive integer: a prize associated with the ball. A player draws exactly K balls from the urn uniformly at random. The player wins the largest of the K amounts written on the selected balls. The task is to determine the smallest positive ticket price such that the company selling tickets will not lose money, i.e., the expected profit from selling a ticket is non-negative.

### Example Inputs and Outputs
#### Input: `{10, 10, 10, 10, 10, 10, 10}, K = 3`
- **Output**: `10`

#### Input: `{10, 50, 40, 20, 30}, K = 5`
- **Output**: `50`

#### Input: `{11, 12, 13, 14, 15, 16, 18}, K = 1`
- **Output**: `14.142857142857142`

---

## Solutions

### 1. Dynamic Programming Approach
The first approach calculates the expected maximum using dynamic programming. This method is deterministic and uses exact mathematical computations based on binomial coefficients to determine probabilities.

#### Key Features
- **Accuracy**: Produces exact results.
- **Complexity**: Higher time complexity due to factorial computations.

#### Implementation Highlights
- Computes binomial coefficients for selecting balls.
- Uses probabilities to calculate the expected maximum.

### 2. Monte Carlo Simulation
The second approach uses a Monte Carlo simulation to approximate the expected maximum by simulating random draws.

#### Key Features
- **Accuracy**: Approximation, but improves with a larger number of simulations.
- **Complexity**: Lower time complexity for large datasets.
- **Reproducibility**: Improved by using a seeded random number generator.

#### Implementation Highlights
- Randomly samples K balls multiple times.
- Computes the average of the maximum values drawn across all simulations.
- Supports configurable seed and number of simulations for better accuracy.

---

## Project Structure

```
├── src
│   ├── dynamicProgramming.ts   # Contains the implementation of the Dynamic Programming solution
│   ├── monteCarloSimulation.ts # Contains the Monte Carlo Simulation solution
├── .gitignore                  # Specifies intentionally untracked files
├── package.json                # Node.js project metadata and dependencies
├── README.md                   # This documentation
├── ts-config.json              # TypeScript configuration
├── yarn.lock                   # Dependency lock file for Yarn
```

---

## Running the Project

### Prerequisites
- **Node.js**: Ensure Node.js is installed.
- **Yarn**: Install Yarn as the package manager.

### Installation
1. Clone the repository.
2. Navigate to the project folder.
3. Run `yarn install` to install dependencies.

### Usage
1. Run the Dynamic Programming solution:
   ```bash
   yarn ts-node src/dynamicProgramming.ts
   ```

2. Run the Monte Carlo Simulation solution:
   ```bash
   yarn ts-node src/monteCarloSimulation.ts
   ```

---

## Notes
- Use the Dynamic Programming solution for exact results.
- Use the Monte Carlo solution for approximations, especially for large datasets or when performance is a concern.

---

## License
This project is licensed under the MIT License.

