package com.example.LearnCodeWave.Services;

import java.util.List;

import com.example.LearnCodeWave.model.Tutorial;

public interface TutorialService {
    List<Tutorial> getAllTutorialsForStudent();
    List<Tutorial> getAllTutorials();
    Tutorial getTutorialById(Long id);
    Tutorial createTutorial(Tutorial tutorial);
    Tutorial updateTutorial(Long id, Tutorial tutorial);
    void deleteTutorial(Long id);
}