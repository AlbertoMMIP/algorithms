// Give a number N return the index value of the Fibonacci sequence
// where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// input = 2 => output = 1 
// input = 8 => output = 21


function fibonacciIterative(n) {  // O(n)
  if (n <= 1) return n;
  let previousValue = 0
  let currentvalue = 1
  let value = previousValue + currentvalue
  for (let i = 2; i < n; i++) {
    previousValue = currentvalue
    currentvalue = value
    value = previousValue + currentvalue
  }
  return value;
}

function fibonacciRecursive(n) {  // O(2^n)
  if (n <= 1) return n;
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

function fibonacciOptimaze() {   // O (n)
  let cache = {};
  return function fib(n) {
    if (!cache[n]) {
      if (n < 2) return n;
      else {
        cache[n] = fib(n-1) + fib(n-2);        
      }
    }
    return cache[n];
  }
}

function fibonacciArrays (n) {
  let answers = [0,1];
  for (let c = 2; c <= n; c++) {
    answers.push(answers[c-1] + answers[c-2])
  }
  return answers.pop();
}

export function init() {
  const index = 5
  // const valueInFibonacci = fibonacciIterative(index);
  const fibonacciMaster = fibonacciOptimaze();
  // const valueInFibonacci = fibonacciRecursive(index);
  // console.log(`Fibonacci value of index ${index} is::: ${valueInFibonacci}`)
  console.log(`Fibonacci DP value of index ${index} is::: ${fibonacciMaster(index)}`)
  console.log(`Fibonacci Arrays value of index ${index} is::: ${fibonacciArrays(index)}`)

}