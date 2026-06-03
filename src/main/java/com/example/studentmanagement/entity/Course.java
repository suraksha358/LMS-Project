package com.example.studentmanagement.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String courseName;

    private String duration;

    // NEW FIELD

    private Double fees;

    // COURSE IMAGE URL

    private String imageUrl;
}