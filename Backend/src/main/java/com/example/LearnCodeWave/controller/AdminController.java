package com.example.LearnCodeWave.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.LearnCodeWave.Services.AdminService;
import com.example.LearnCodeWave.Services.StudentService;
import com.example.LearnCodeWave.model.Admin;
import com.example.LearnCodeWave.model.Student;


@CrossOrigin(origins = "http://localhost:3000")
// @CrossOrigin(origins = "*")
@RestController
@RequestMapping("/admins")
public class AdminController {
     private final AdminService adminService;
    private final StudentService studentService;


    @Autowired
    public AdminController(AdminService adminService,StudentService studentService) {
        this.adminService = adminService;
        this.studentService=studentService;
    }

    @PostMapping("/createadmin")
    public ResponseEntity<Admin> createAdmin(@RequestBody  AdminLoginRequest loginRequest) {
        try {
            Admin createdAdmin = adminService.createAdmin(loginRequest);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdAdmin);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/students")
    public ResponseEntity<List<Student>> getAllStudents() {
        List<Student> students = studentService.getAllStudents();
        return ResponseEntity.ok(students);
    }
        
    @GetMapping("/allAdmins")
public ResponseEntity<List<Admin>> getAllAdmins() {
    List<Admin> admins = adminService.getAllAdmins();
    return ResponseEntity.ok(admins);
}

    @PostMapping("/login")
    public ResponseEntity<Admin> login(@RequestBody AdminLoginRequest loginRequest) {
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword();

        Optional<Admin> admin = adminService.login(username, password);

        return admin.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(401).build());
    }

    @PostMapping("/addStudent")
    public ResponseEntity<Student> addStudent(@RequestBody Student student) {
        Student addedStudent = studentService.addStudent(student);
        return ResponseEntity.ok(addedStudent);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/checkLogin")
    public ResponseEntity<String> checkLogin(@RequestParam String username, @RequestParam String password) {
        Optional<Admin> admin = adminService.login(username, password);

        return admin.map(a -> ResponseEntity.ok("Admin login successful!"))
                .orElseGet(() -> ResponseEntity.status(401).body("Admin login failed"));
    }
    @PostMapping("/updateStudent/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable Long id, @RequestBody Student student) {
        Optional<Student> existingStudent = studentService.getStudentById(id);

        if (existingStudent.isPresent()) {
            student.setId(id); // Set the ID of the existing student
            Student updatedStudent = studentService.addStudent(student);
            return ResponseEntity.ok(updatedStudent);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Endpoint to delete a student by ID
    @DeleteMapping("/deleteStudent/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable Long id) {
        boolean isDeleted = studentService.deleteStudentById(id);

        if (isDeleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}