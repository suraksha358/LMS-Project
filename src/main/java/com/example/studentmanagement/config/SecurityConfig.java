package com.example.studentmanagement.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;

import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(
            HttpSecurity http) throws Exception {

        http

                .csrf(csrf -> csrf.disable())

                .authorizeHttpRequests(auth -> auth

                        // PUBLIC APIS

                        .requestMatchers(
                                "/auth/**",
                                "/courses/**",
                                "/students/**"
                        ).permitAll()

                        // PUBLIC HTML PAGES

                        .requestMatchers(
                                "/",
                                "/index.html",
                                "/students.html",
                                "/courses.html",
                                "/dashboard.html",
                                "/enrollment.html",
                                "/login.html",
                                "/*.js",
                                "/*.css"
                        ).permitAll()

                        // ALL OTHER REQUESTS

                        .anyRequest().authenticated()
                )

                .formLogin(form -> form.disable());

        return http.build();
    }
}
