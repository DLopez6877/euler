const ProblemTen = {
  title: 'A Summation of Primes',
  goal: 2000000,
  solution: (goal) => {
          var array = [], upperLimit = Math.sqrt(goal), output = 0;
          for (var i = 0; i < goal; i++) {
            array.push(i);
          }
          for (i = 2; i <= upperLimit; i++) {
            if (array[i]) {
              for (var j = i * i; j < goal; j += i) {
                array[j] = false;
              }
            }
          }
          for (i = 2; i < goal; i++) {
            if(array[i] !== false) {
              output += array[i];
            }
          }
          return output;
        },
  description: `
    The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.\n
    Find the sum of all the primes below two million.
    `,
  href: 'https://projecteuler.net/problem=10'
}

export default ProblemTen;
