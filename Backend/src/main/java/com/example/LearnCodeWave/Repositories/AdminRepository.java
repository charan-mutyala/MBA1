package com.example.LearnCodeWave.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.LearnCodeWave.model.Admin;

public interface AdminRepository extends JpaRepository<Admin,Long> {
    Optional<Admin> findByUsernameAndPassword(String username, String password);

    
}
