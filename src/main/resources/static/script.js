const BASE_URL = "http://localhost:8080/api";

// ================= STUDENT =================

const studentForm = document.getElementById("studentForm");

studentForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const student = {
        name: document.getElementById("studentName").value,
        email: document.getElementById("studentEmail").value,
        mobile: document.getElementById("studentMobile").value
    };

    await fetch(`${BASE_URL}/students`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    });

    studentForm.reset();

    loadStudents();
    loadStudentDropdown();
});


// ================= COURSE =================

const courseForm = document.getElementById("courseForm");

courseForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const course = {
        courseName: document.getElementById("courseName").value,
        duration: document.getElementById("courseDuration").value
    };

    await fetch(`${BASE_URL}/courses`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(course)
    });

    courseForm.reset();

    loadCourses();
    loadCourseDropdown();
});


// ================= LOAD STUDENTS =================

async function loadStudents() {

    const response = await fetch(`${BASE_URL}/students`);

    const students = await response.json();

    const table = document.getElementById("studentTable");

    table.innerHTML = "";

    students.forEach(student => {

        let courseNames = student.courses
            .map(course => course.courseName)
            .join(", ");

        table.innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.mobile}</td>
                <td>${courseNames || "No Courses"}</td>
            </tr>
        `;
    });
}


// ================= LOAD COURSES =================

async function loadCourses() {

    const response = await fetch(`${BASE_URL}/courses`);

    const courses = await response.json();

    const table = document.getElementById("courseTable");

    table.innerHTML = "";

    courses.forEach(course => {

        table.innerHTML += `
            <tr>
                <td>${course.id}</td>
                <td>${course.courseName}</td>
                <td>${course.duration}</td>
            </tr>
        `;
    });
}


// ================= DROPDOWNS =================

async function loadStudentDropdown() {

    const response = await fetch(`${BASE_URL}/students`);

    const students = await response.json();

    const select = document.getElementById("studentSelect");

    select.innerHTML = "";

    students.forEach(student => {

        select.innerHTML += `
            <option value="${student.id}">
                ${student.name}
            </option>
        `;
    });
}

async function loadCourseDropdown() {

    const response = await fetch(`${BASE_URL}/courses`);

    const courses = await response.json();

    const select = document.getElementById("courseSelect");

    select.innerHTML = "";

    courses.forEach(course => {

        select.innerHTML += `
            <option value="${course.id}">
                ${course.courseName}
            </option>
        `;
    });
}


// ================= ENROLLMENT =================

const enrollForm = document.getElementById("enrollForm");

enrollForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const studentId = document.getElementById("studentSelect").value;

    const courseId = document.getElementById("courseSelect").value;

    await fetch(`${BASE_URL}/students/${studentId}/courses/${courseId}`, {
        method: "POST"
    });

    alert("Student Enrolled Successfully");

    loadStudents();
});


// ================= INITIAL LOAD =================

loadStudents();
loadCourses();
loadStudentDropdown();
loadCourseDropdown();