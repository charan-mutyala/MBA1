package com.example.LearnCodeWave.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.LearnCodeWave.model.Student;

public interface StudentRepository extends JpaRepository<Student,Long> {
    Optional<Student> findByRegistrationNumberAndPassword(String registrationNumber, String password);

    
}
