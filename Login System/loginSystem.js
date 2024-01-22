// Question No 5  :  Login System
function login(username, password) {
     const correctUsername = "admin";
     const correctPassword = "12345";

     if (username === correctUsername && password === correctPassword) {
          console.log("Login Successful");
     } else {
          console.log("Invalid credentials");
     }
}

// Example usage:
const enteredUsername = "admin";
const enteredPassword = "12345";
login(enteredUsername, enteredPassword);
