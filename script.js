let loginButton = document.getElementById("loginButton");

let studentId = document.getElementById("studentId");

let password = document.getElementById("password");


loginButton.addEventListener("click", function() {

    let correctStudentId = "MIT001";
    let correctPassword = "1234";


    if (studentId.value === "") {
        alert("Please enter your Student ID");
        return;
    }


    if (password.value === "") {
        alert("Please enter your Password");
        return;
    }


    if (studentId.value === correctStudentId &&
        password.value === correctPassword) {

        localStorage.setItem("studentId", studentId.value);

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid Student ID or Password");

    }

});