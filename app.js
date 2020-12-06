// This JavaScript file is connected to passwordPage.html

var passwordInput1 = document.getElementById("passwordInput");
var submitButton = document.getElementById("submitBtn");

// Submits the password, if the password is correct it redirects to the index.html page
// If the password is incorrect an error message appears
submitButton.addEventListener("click", function(){
    if (passwordInput1.value == "1234") {
        // Correct password
        location.replace("index.html")
    }
    else {
        // Incorrect password
        document.getElementById("errorMessage").innerHTML = "Please enter the correct password";
    }
});

// This makes it so that when you press the enter button it submits the password
passwordInput1.addEventListener("keyup",function(event) {
    if (event.keyCode === 13) {
        if (passwordInput1.value == "1234") {
            // Correct password
            location.replace("index.html")
        }
        else {
            // Incorrect password
            document.getElementById("errorMessage").innerHTML = "Please enter the correct password";
        }
    }
})

// This makes it so that when you begin to delete an incorrect password attempt, the error message is deleted
passwordInput1.addEventListener("keyup", function(event) {
    if (event.keyCode === 8) {
        document.getElementById("errorMessage").innerHTML = " ";
    }
})