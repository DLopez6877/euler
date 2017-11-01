const ProblemSix = {
  title: 'Sum Square Difference',
  goal: 100,
  solution: (goal) => {
    let sumOfSquares = function() {
      let total = 0;
      for (let i = 1; i <= goal; i++) {
        total += Math.pow(i, 2);
      }
      return total;
    };
    let squareOfSums = function() {
      let total = 0;
      for(let i = 1; i <= 100; i++) {
        total += i;
      }
      return Math.pow(total, 2);
    };
    console.log('Sum of the squares:', sumOfSquares());
    console.log('Square of the sums:', squareOfSums());
    return squareOfSums() - sumOfSquares();
  },
  description: `
    The sum of the squares of the first ten natural numbers is,\n
    1² + 2² + ... + 10² = 385\n
    The square of the sum of the first ten natural numbers is,\n
    (1 + 2 + ... + 10)² = 552 = 3025\n
    Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.\n
    Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
    `,
  href: 'https://projecteuler.net/problem=6'
}

export default ProblemSix;
