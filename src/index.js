function isPalindrome(number) {
    const numStr = number.toString();
    return numStr === numStr.split('').reverse().join('');
  }
  
  function findPalindrome(number) {
    let steps = 0;
    while (!isPalindrome(number)) {
      const reversedNumber = parseInt(number.toString().split('').reverse().join(''), 10);
      number += reversedNumber;
      steps++;
  
      if (steps >= 1000) {
        return { result: null, steps };
      }
    }
  
    return { result: number, steps };
  }
  
  const result = findPalindrome(196);
  console.log(result);