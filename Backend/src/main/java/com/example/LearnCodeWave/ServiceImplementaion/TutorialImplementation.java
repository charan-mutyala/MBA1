package com.example.LearnCodeWave.ServiceImplementaion;

// src/main/java/com/example/demo/service/TutorialServiceImpl.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.LearnCodeWave.Repositories.TutorialRepository;
import com.example.LearnCodeWave.Services.TutorialService;
import com.example.LearnCodeWave.model.Tutorial;

import java.util.List;
import java.util.Optional;

@Service
public class TutorialImplementation implements TutorialService {
    private final TutorialRepository tutorialRepository;

    @Autowired
    public TutorialImplementation(TutorialRepository tutorialRepository) {
        this.tutorialRepository = tutorialRepository;
    }

    @Override
    public List<Tutorial> getAllTutorials() {
        return tutorialRepository.findAll();
    }
    @Override
    public List<Tutorial> getAllTutorialsForStudent() {
        return tutorialRepository.findAll();
    }

    @Override
    public Tutorial getTutorialById(Long id) {
        return tutorialRepository.findById(id).orElse(null);
    }

    @Override
    public Tutorial createTutorial(Tutorial tutorial) {
        return tutorialRepository.save(tutorial);
    }

    @Override
    public Tutorial updateTutorial(Long id, Tutorial updatedTutorial) {
        Optional<Tutorial> existingTutorialOptional = tutorialRepository.findById(id);

        if (existingTutorialOptional.isPresent()) {
            Tutorial existingTutorial = existingTutorialOptional.get();
            existingTutorial.setTitle(updatedTutorial.getTitle());
            existingTutorial.setDescription(updatedTutorial.getDescription());
            existingTutorial.setContent(updatedTutorial.getContent());

            return tutorialRepository.save(existingTutorial);
        }

        return null;
    }

    @Override
    public void deleteTutorial(Long id) {
        tutorialRepository.deleteById(id);
    }
}
