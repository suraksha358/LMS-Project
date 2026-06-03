function pay(method) {

    const studentId = sessionStorage.getItem("studentId");
    const courseId = sessionStorage.getItem("courseId");

    console.log("Student ID:", studentId);
    console.log("Course ID:", courseId);

    document.getElementById("status").innerText =
        "Processing " + method + " payment...";

    setTimeout(() => {

        fetch(`http://localhost:8080/api/students/${studentId}/courses/${courseId}`, {
            method: "POST"
        })
            .then(res => res.json())
            .then(data => {

                document.getElementById("status").innerText =
                    "Payment Successful 🎉";

                setTimeout(() => {

                    alert("Student Enrolled Successfully!");

                    window.location.href = "mycourses.html";

                }, 1500);

            })
            .catch(err => {
                console.log(err);
                alert("Enrollment Failed");
            });

    }, 2000);
}