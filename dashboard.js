if (localStorage.getItem("studentId")==null)
{
    window.location.href="index.html";
}

let studentInfo =
document.getElementById("studentInfo");

let savedStudentId=
localStorage.getItem("studentId");

studentInfo.textContent="Student ID:"+
savedStudentId;

let studentName=
document.getElementById("studentName");

let savedstudentName=
localStorage.getItem("studentName");

studentName.textContent="Name:"+
savedStudentName;

let studentCourse =
document.getElementById("studentCourse");

let savedStudentCourse=
localStorage.getItem("studentCourse");

studentCourse.textContent= "Course: "+
savedStudentCourse;

let logoutButton =
document.getElementById("logoutButton");

logoutButton.addEventListener("click",
    function() {
        localStorage.clear();

        window.location.href="index.html";
    });