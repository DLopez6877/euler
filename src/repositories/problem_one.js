const ProblemOne = {
  title: 'Multiples of 3 and 5',
  goal: 1000,
  solution: (goal) => {
    let multiples = [];
    for (let i = 0; i < goal; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        multiples.push(i);
      }
    }
    let sum = multiples.reduce((a, b) => a + b, 0);
    return sum;
  },
  description: `
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.
    `,
  href: 'https://projecteuler.net/problem=1'
}

export default ProblemOne;
