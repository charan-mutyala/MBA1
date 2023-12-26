package com.example.LearnCodeWave.ServiceImplementaion;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.LearnCodeWave.Repositories.StudentRepository;
import com.example.LearnCodeWave.Services.StudentService;
import com.example.LearnCodeWave.model.Student;

import java.util.List;
import java.util.Optional;

@Service
public class StudentImplementation implements StudentService {
    private final StudentRepository studentRepository;

    @Autowired
    public StudentImplementation(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public Student addStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public Optional<Student> login(String registrationNumber, String password) {
        return studentRepository.findByRegistrationNumberAndPassword(registrationNumber, password);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
    public boolean deleteStudentById(Long id) {
        if (studentRepository.existsById(id)) {
            studentRepository.deleteById(id);
            return true;
        }
        return false;
    }
    public Optional<Student> getStudentById(Long id) {
        return studentRepository.findById(id);
    }

}
