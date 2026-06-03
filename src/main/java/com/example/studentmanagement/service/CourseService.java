package com.example.studentmanagement.service;

import com.example.studentmanagement.entity.Course;
import com.example.studentmanagement.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;


    // ADD COURSE

    public Course addCourse(Course course){

        return courseRepository.save(course);
    }


    // GET ALL COURSES

    public List<Course> getAllCourses(){

        return courseRepository.findAll();
    }


    // GET COURSE BY ID

    public Course getCourseById(Long id){

        return courseRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Course not found"));
    }


    // UPDATE COURSE

    public Course updateCourse(Long id, Course updatedCourse){

        Course course = courseRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Course not found"));

        course.setCourseName(updatedCourse.getCourseName());
        course.setDuration(updatedCourse.getDuration());
        course.setFees(updatedCourse.getFees());
        course.setImageUrl(updatedCourse.getImageUrl());

        return courseRepository.save(course);
    }


    // DELETE COURSE

    public void deleteCourse(Long id){

        Course course = courseRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Course not found"));

        courseRepository.delete(course);
    }
}