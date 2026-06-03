fetch("http://localhost:8080/api/courses")
    .then(res => res.json())
    .then(data => {

        const container = document.getElementById("courseList");

        data.forEach(course => {

            const card = document.createElement("div");

            card.className = "course-card";

            card.innerHTML = `
            <img src="${course.imageUrl}" alt="course"/>
            <h2>${course.courseName}</h2>
            <p>Duration: ${course.duration}</p>
            <p>Fees: ₹${course.fees}</p>

            <button onclick="enroll(${course.id})">
                Enroll Now
            </button>
        `;

            container.appendChild(card);
        });
    });

function enroll(courseId) {

    sessionStorage.setItem("courseId", courseId);

    window.location.href = "payment.html";
}