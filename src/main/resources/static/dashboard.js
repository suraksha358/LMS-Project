const BASE_URL = "/api";


// ================= LOAD DASHBOARD =================

async function loadDashboard(){

    // FETCH STUDENTS

    const studentResponse =
        await fetch(`${BASE_URL}/students`);

    const students =
        await studentResponse.json();


    // FETCH COURSES

    const courseResponse =
        await fetch(`${BASE_URL}/courses`);

    const courses =
        await courseResponse.json();


    // TOTAL STUDENTS

    document.getElementById("studentCount")
        .innerText = students.length;


    // TOTAL COURSES

    document.getElementById("courseCount")
        .innerText = courses.length;


    // TOTAL ENROLLMENTS

    let totalEnrollments = 0;

    students.forEach(student => {

        totalEnrollments += student.courses.length;
    });

    document.getElementById("enrollmentCount")
        .innerText = totalEnrollments;


    // RECENT STUDENTS TABLE

    const table =
        document.getElementById("recentStudents");

    table.innerHTML = "";

    students.slice(-5).reverse().forEach(student => {

        table.innerHTML += `

            <tr>

                <td>${student.id}</td>

                <td>${student.name}</td>

                <td>${student.email}</td>

            </tr>
        `;
    });
}


// ================= INITIAL LOAD =================

loadDashboard();