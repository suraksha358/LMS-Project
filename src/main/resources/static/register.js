function registerStudent() {

    let student = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value
    };

    fetch("http://localhost:8080/api/students", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    })
        .then(res => res.json())
        .then(data => {

            // Save logged-in student id
            sessionStorage.setItem("studentId", data.id);

            // Go to courses page
            window.location.href = "courses.html";

        })
        .catch(err => {
            console.log(err);
            alert("Registration Failed");
        });
}