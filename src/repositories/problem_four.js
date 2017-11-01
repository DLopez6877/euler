const ProblemFour = {
  title: 'Largest Palindome Product',
  goal: 1000,
  solution: (goal) => {
    let palindromes = [];
    function checkPalindrome (num) {
      let str = num.toString();
      let reverse = str.split('').reverse().join('');
      if (str === reverse) {
        return true;
      } else {
        return false;
      }
    }
    for (let i = 100; i < goal; i++) {
      for(let j = 100; j < goal; j++) {
        let result = i * j;
        let isPalindrome = checkPalindrome(result);
        if (isPalindrome) {
          palindromes.push(result);
        }
      }
    }
    console.log('Palindromes from 3 digit numbers:', palindromes);
    return Math.max(...palindromes);
  },
  description: `
  A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.\n
  Find the largest palindrome made from the product of two 3-digit numbers.
    `,
  href: 'https://projecteuler.net/problem=1'
}

export default ProblemFour;
