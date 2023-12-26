package com.example.LearnCodeWave.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.LearnCodeWave.Services.StudentService;
import com.example.LearnCodeWave.model.Student;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/students")
public class StudentController {
     private final StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @PostMapping("/login")
    public ResponseEntity<Student> login(@RequestBody StudentLoginRequest loginRequest) {
        String registrationNumber = loginRequest.getRegistrationNumber();
        String password = loginRequest.getPassword();

        Optional<Student> student = studentService.login(registrationNumber, password);

        return student.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(401).build());
    }
    @GetMapping("/login")
    public ResponseEntity<Student> login(
            @RequestParam("registrationNumber") String registrationNumber,
            @RequestParam("password") String password
    ) {
        Optional<Student> student = studentService.login(registrationNumber, password);

        return student.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(401).build());
    }
}