# Learning Management System (LMS)

## Overview

The Learning Management System (LMS) is a full-stack web application developed using Spring Boot, PostgreSQL, HTML, CSS, and JavaScript.

The application allows students to register, explore available IT courses, view course details, and enroll in courses through a simple payment workflow. The project demonstrates frontend-backend integration, REST API development, database management, and responsive web design.

---

## Features

### Student Registration

* Register with name, email, and mobile number
* Student details stored in PostgreSQL database

### Course Catalog

* View available IT courses
* Course image, duration, and fee information
* Technology-specific course icons

### Course Enrollment

* Select and enroll in courses
* Student-course mapping using Many-to-Many relationship

### Payment Module

* Google Pay UI
* PhonePe UI
* Paytm UI
* Payment success simulation

### User-Friendly Interface

* Responsive Home Page
* Registration Page
* Courses Page
* Payment Page
* Clean and modern design

---

## Technologies Used

### Backend

* Java
* Spring Boot
* Spring Data JPA
* Hibernate
* REST APIs

### Frontend

* HTML5
* CSS3
* JavaScript

### Database

* PostgreSQL

### Tools

* IntelliJ IDEA
* Postman
* Git
* GitHub

---

## Database Design

### Student

| Field  |
| ------ |
| id     |
| name   |
| email  |
| mobile |

### Course

| Field       |
| ----------- |
| id          |
| course_name |
| duration    |
| fees        |
| image_url   |

### Student_Course

| Field      |
| ---------- |
| student_id |
| course_id  |

The Student_Course table is used to maintain the many-to-many relationship between students and courses.

---

## Available Courses

* Java
* Python
* React
* Spring Boot
* .NET
* C++
* JavaScript
* SQL

---

## Application Flow

Home Page

↓

Student Registration

↓

View Available Courses

↓

Select Course

↓

Payment Page

↓

Enrollment Confirmation

---

## REST API Endpoints

### Student APIs

Add Student

POST /api/students

Get All Students

GET /api/students

Get Student By ID

GET /api/students/{id}

---

### Course APIs

Add Course

POST /api/courses

Get All Courses

GET /api/courses

---

### Enrollment API

Enroll Student Into Course

POST /api/students/{studentId}/courses/{courseId}

---

## Learning Outcomes

This project helped me gain practical experience in:

* Building RESTful APIs using Spring Boot
* PostgreSQL database integration
* Entity relationships using JPA
* Frontend and backend integration
* CRUD operations
* Responsive web design
* Git and GitHub version control

---

## Future Enhancements

* Student Login Authentication
* My Courses Page
* Course Search and Filters
* Enrollment History
* Real Payment Gateway Integration
* Course Progress Tracking
* Certificate Generation

---

## Author

Suraksha

A full-stack Learning Management System developed using Spring Boot, PostgreSQL, HTML, CSS, and JavaScript.
