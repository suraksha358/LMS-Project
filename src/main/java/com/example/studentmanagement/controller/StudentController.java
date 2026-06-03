package com.example.studentmanagement.controller;

import jakarta.validation.Valid;
import com.example.studentmanagement.entity.Student;
import com.example.studentmanagement.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    // Add Student
    @PostMapping
    public Student addStudent(@Valid @RequestBody Student student) {

        return studentService.addStudent(student);
    }

    // Get All Students
    @GetMapping
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    // Get Student By ID
    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable Long id) {
        return studentService.getStudentById(id);
    }

    // UPDATE STUDENT

    @PutMapping("/{id}")
    public Student updateStudent(
            @PathVariable Long id,
            @Valid @RequestBody Student student){

        return studentService.updateStudent(id, student);
    }


// DELETE STUDENT

    @DeleteMapping("/{id}")
    public String deleteStudent(@PathVariable Long id){

        studentService.deleteStudent(id);

        return "Student Deleted Successfully";
    }

    // Enroll Student Into Course
    @PostMapping("/{studentId}/courses/{courseId}")
    public Student enrollCourse(@PathVariable Long studentId,
                                @PathVariable Long courseId) {

        return studentService.enrollCourse(studentId, courseId);
    }
}
