const ProblemThree = {
  title: 'Largest Prime Factor',
  goal: 600851475143,
  solution: (goal) => {
    let primeNumbers = [],
    isPrime = false;
    for(var i = 2; i <= goal; i++){
      if (goal % i === 0) {
        for(let j = 2; j <= i/2; j++) {
          if(i % j === 0) {
            isPrime = false;
          } else {
            isPrime = true;
          }
        }
        if (isPrime === true) {
          goal /= i;
          primeNumbers.push(i);
        }
      }
    }
    console.log(primeNumbers.join(", "));
    return Math.max(...primeNumbers)
  },
  description: `
  The prime factors of 13195 are 5, 7, 13 and 29.\n
  What is the largest prime factor of the number 600851475143 ?
    `,
  href: 'https://projecteuler.net/problem=1'
}

export default ProblemThree;
