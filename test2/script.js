
// function submitForm() {
//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;

//     // You can perform further validation here if needed

//     // Sending data to PHP for storage
//     fetch("http://localhost/sagnik/store.php", {
//         method: "POST",
//         headers: {
//             "Content-type": "application/x-www-form-urlencoded",
//         },
//         body: "email=" + email + "&password=" + password,
//         mode: "no-cors", // Add this line
//     })
//     .then(response => console.log("Data stored successfully!"))
//     .catch(error => console.error("Error storing data:", error));
// }

function submitForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // You can perform further validation here if needed

    // Sending data to PHP for storage
    fetch("http://localhost/test2/store.php", {
        method: "POST",
        headers: {
            "Content-type": "application/x-www-form-urlencoded",
        },
        body: "email=" + email + "&password=" + password,
    })
    .then(response => {
        console.log("Data stored successfully!");

        // Redirect to the data display page
        window.location.href = "http://localhost/test2/display.php";
    })
    .catch(error => console.error("Error storing data:", error));
}

