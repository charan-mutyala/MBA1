package com.example.LearnCodeWave.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.LearnCodeWave.model.Tutorial;

public interface TutorialRepository extends JpaRepository<Tutorial,Long> {
    
}
