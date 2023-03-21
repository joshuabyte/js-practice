function fibonacci(n) {
  let fib = [0, 1]; // initialize the first two numbers in the sequence

  for (let i = 2; i < n; i++) {
    // generate the next number in the sequence by adding the two previous numbers
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib.slice(0, n); // return the first n numbers in the sequence
}

console.log(fibonacci(10));
