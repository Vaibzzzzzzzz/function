// Create an array to store email and password pairs
let userCredentials = [];

// Function to add an email and password pair
function addCredentials(email, password) {
    // Create an object to store email and password
    let user = {
        email: email,
        password: password
    };

    // Push the user object into the array
    userCredentials.push(user);
}

// Add 5 email and password pairs
addCredentials('user1@example.com', 'password1');
addCredentials('user2@example.com', 'password2');
addCredentials('user3@example.com', 'password3');
addCredentials('user4@example.com', 'password4');
addCredentials('user5@example.com', 'password5');

// Display the credentials
console.log("Stored Email and Password Pairs:");
userCredentials.forEach((user, index) => {
    console.log(`Email: ${user.email}, Password: ${user.password}`);
});
