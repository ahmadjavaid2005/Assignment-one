// Question No 8 :  Calculate Sum of Numbers
function calculateSumOfNumbers(n) {
     let sum = 0;
     let i = 1;

     do {
          sum += i;
          i++;
     } while (i <= n);

     console.log(`Sum of numbers from 1 to ${n}: ${sum}`);
}

// Example usage:
const inputNumber = 5;
calculateSumOfNumbers(inputNumber);
