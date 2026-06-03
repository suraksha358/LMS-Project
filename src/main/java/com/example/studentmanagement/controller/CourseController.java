package com.example.studentmanagement.controller;

import com.example.studentmanagement.entity.Course;
import com.example.studentmanagement.service.CourseService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/courses")
public class CourseController {

    @Autowired
    private CourseService courseService;


    // ADD COURSE

    @PostMapping
    public Course addCourse(@Valid @RequestBody Course course){

        return courseService.addCourse(course);
    }


    // GET ALL COURSES

    @GetMapping
    public List<Course> getAllCourses(){

        return courseService.getAllCourses();
    }


    // GET COURSE BY ID

    @GetMapping("/{id}")
    public Course getCourseById(@PathVariable Long id){

        return courseService.getCourseById(id);
    }


    // UPDATE COURSE

    @PutMapping("/{id}")
    public Course updateCourse(
            @PathVariable Long id,
            @Valid @RequestBody Course course){

        return courseService.updateCourse(id, course);
    }


    // DELETE COURSE

    @DeleteMapping("/{id}")
    public String deleteCourse(@PathVariable Long id){

        courseService.deleteCourse(id);

        return "Course Deleted Successfully";
    }
}