const ProblemSeven = {
  title: '10001st Prime',
  goal: 10001,
  solution: (goal) => {
    let answer = 0;
    let primes = 0;
    for (var i = 2; primes < goal; i++) {
      if(isPrime(i)) {
        primes++;
        answer = i;
      }
    }
    function isPrime(num) {
      for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
      return true;
    }
    return answer;
  },
  description: `
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.
    `,
  href: 'https://projecteuler.net/problem=7'
}

export default ProblemSeven;
