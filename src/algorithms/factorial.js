// Write two functions that finds the factorial of any number 
// One should use recursive
// The other one should just use a for loop

function findFactorialRecursive (number) { // O(n)
  if (number === 2) return number;
  return number * findFactorialRecursive(number-1);
}

function findFactorialIterative (number) { // O(n)
  if (number <= 1) return number;
  let factorial = 1;
  for (let i = number; i > 0; i--) {
    factorial = factorial * i;
  }
  return factorial;
}

export function init () {
  const task = 5;
  const factorial = findFactorialRecursive(5);
  // const factorial = findFactorialIterative(5);
  console.log(`The factorial of ${task} is::: ${factorial}`);
}