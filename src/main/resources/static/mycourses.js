const studentId = sessionStorage.getItem("studentId");

fetch(`http://localhost:8080/api/students/${studentId}`)
    .then(res => res.json())
    .then(student => {

        const container =
            document.getElementById("myCoursesList");

        if(student.courses.length === 0){

            container.innerHTML =
                "<h2>No Courses Enrolled Yet</h2>";

            return;
        }

        student.courses.forEach(course => {

            document.getElementById("studentName").innerText =
                student.name;

            document.getElementById("studentEmail").innerText =
                student.email;

            document.getElementById("studentMobile").innerText =
                student.mobile;

            const card =
                document.createElement("div");

            card.className = "course-card";

            card.innerHTML = `
                <img src="${course.imageUrl}" alt="course">

                <h2>${course.courseName}</h2>

                <p>Duration: ${course.duration}</p>

                <p>Fees: ₹${course.fees}</p>

                <button disabled>
                    Enrolled
                </button>
            `;

            container.appendChild(card);
        });

    })
    .catch(error => {

        console.log(error);

        alert("Unable to load courses");
    });