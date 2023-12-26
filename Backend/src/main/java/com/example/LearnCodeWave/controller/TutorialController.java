package com.example.LearnCodeWave.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.LearnCodeWave.Services.TutorialService;
import com.example.LearnCodeWave.model.Tutorial;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/tutorials")
public class TutorialController {
    private final TutorialService tutorialService;

    @Autowired
    public TutorialController(TutorialService tutorialService) {
        this.tutorialService = tutorialService;
    }

    @GetMapping
    public ResponseEntity<List<Tutorial>> getAllTutorials() {
        List<Tutorial> tutorials = tutorialService.getAllTutorials();
        return ResponseEntity.ok(tutorials);
    }
    @GetMapping("/tutorials/student")
public ResponseEntity<List<Tutorial>> getAllTutorialsForStudent() {
    // Retrieve tutorials based on the authenticated student (you might need a student ID or similar)
    List<Tutorial> tutorials = tutorialService.getAllTutorialsForStudent();
    return ResponseEntity.ok(tutorials);
}
    @GetMapping("/{id}")
    public ResponseEntity<Tutorial> getTutorialById(@PathVariable Long id) {
        Tutorial tutorial = tutorialService.getTutorialById(id);
        return tutorial != null ? ResponseEntity.ok(tutorial) : ResponseEntity.notFound().build();
    }

    // @PostMapping
    // public ResponseEntity<Tutorial> createTutorial(@RequestBody Tutorial tutorial) {
    //     Tutorial createdTutorial = tutorialService.createTutorial(tutorial);
    //     return ResponseEntity.status(HttpStatus.CREATED).body(createdTutorial);
    // }

    @PostMapping
    public ResponseEntity<Tutorial> createTutorial(@RequestBody Tutorial tutorial) {
        try {
            Tutorial createdTutorial = tutorialService.createTutorial(tutorial);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdTutorial);
        } catch (Exception e) {
            e.printStackTrace(); // Log the exception
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tutorial> updateTutorial(@PathVariable Long id, @RequestBody Tutorial tutorial) {
        Tutorial updatedTutorial = tutorialService.updateTutorial(id, tutorial);
        return updatedTutorial != null ? ResponseEntity.ok(updatedTutorial) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTutorial(@PathVariable Long id) {
        tutorialService.deleteTutorial(id);
        return ResponseEntity.noContent().build();
    }
}
