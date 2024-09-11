function fibonacci(n) {
    let fib = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
}

function pertenceFibonacci(num) {
    let fibSeq = fibonacci(num);
    return fibSeq.includes(num) ? "O número pertence à sequência de Fibonacci." : "O número não pertence à sequência de Fibonacci.";
}

console.log(pertenceFibonacci(21));
