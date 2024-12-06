function atmWithdrawal(balance, amount) {
    // Check if the amount is a multiple of 10
    if (amount % 10 !== 0) {
        return "Error: Amount must be a multiple of $10.";
    }

    // Check if the amount is less than or equal to $500
    if (amount > 500) {
        return "Error: Withdrawal amount cannot exceed $500.";
    }

    // Check if the balance is sufficient
    if (amount > balance) {
        return "Error: Insufficient funds.";
    }

    // If all checks pass, process the withdrawal
    return `Success: You've withdrawn $${amount}. Your new balance is $${balance - amount}.`;
}
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}