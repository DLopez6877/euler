const ProblemNine = {
  title: 'Special Pythagorean Triplet',
  goal: 1000,
  solution: (goal) => {
    let a = 0, b = 0, c = 0, sum = 0;
    while (sum !== goal) {
      for (a = 1; a < goal; ++a) {
        for (b = a + 1; b < goal; ++b) {
          c = 1000 - (a + b);
          sum = a + b + c;
          if (isPythTriplet(a,b,c) && sum === goal) {
            console.log('solution:', a + ' + ' + b + ' + ' + c + ' = ' + sum);
            return a*b*c;
          }
        }
      }
    }
    function isPythTriplet(a,b,c) {
      let a2PlusB2 = (a * a) + (b * b);
      let c2 = (c * c);
      if (a2PlusB2 === c2) {
        return true;
      } else {
        return false;
      }
    }
  },
  description: `
    A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,\n
    a² + b² = c²\n
    There exists exactly one Pythagorean triplet for which a + b + c = 1000.\n
    Find the product abc.
    `,
  href: 'https://projecteuler.net/problem=9'
}

export default ProblemNine;
