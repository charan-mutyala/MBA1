package com.example.LearnCodeWave.Services;

import java.util.List;
import java.util.Optional;

import com.example.LearnCodeWave.model.Student;

public interface StudentService {
    
    Optional<Student> login(String registrationNumber, String password);
    Student addStudent(Student student);
    List<Student> getAllStudents();
    Optional<Student> getStudentById(Long id);
    boolean deleteStudentById(Long id);



}
