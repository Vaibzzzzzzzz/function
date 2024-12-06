// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to find and print squares of first 10 prime numbers
function printSquaresOfPrimes() {
    let count = 0;
    let num = 2; // Starting number to check for prime

    while (count < 10) {
        if (isPrime(num)) {
            console.log(`Square of ${num} is ${num * num}`);
            count++;
        }
        num++;
    }
}

// Call the function to print squares of first 10 prime numbers
printSquaresOfPrimes();
