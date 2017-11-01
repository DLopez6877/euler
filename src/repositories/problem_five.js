const ProblemFive = {
  title: 'Smallest Multiple',
  goal: 10,
  solution: (goal) => {
      let result = false;
      let counter = 1;
      while (result === false) {
        result = isDivisible(counter);
        counter++;
      }
      function isDivisible(int) {
        for (let i = 1; i <= goal; i++) {
          if (int % i !== 0) {
            return false;
          }
        }
        return int;
      }
      return result;
  },
  description: `
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.
    `,
  href: 'https://projecteuler.net/problem=1'
}

export default ProblemFive;
