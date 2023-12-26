package com.example.LearnCodeWave.ServiceImplementaion;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.LearnCodeWave.Repositories.AdminRepository;
import com.example.LearnCodeWave.Services.AdminService;
import com.example.LearnCodeWave.controller.AdminLoginRequest;
import com.example.LearnCodeWave.controller.AdminRequest;
import com.example.LearnCodeWave.model.Admin;


@Service
public class AdminImplementation implements AdminService {
    private final AdminRepository adminRepository;

    @Autowired
    public AdminImplementation(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    @Override
     public Admin createAdmin(AdminLoginRequest loginRequest) {
        
        Admin admin = new Admin();
        admin.setUsername(loginRequest.getUsername());
        admin.setPassword(loginRequest.getPassword());
        return adminRepository.save(admin);
    }

    @Override
    public Optional<Admin> login(String username, String password) {
        return adminRepository.findByUsernameAndPassword(username, password);
    }
    @Override
    public Optional<Admin> getAdminById(Long id) {
        return adminRepository.findById(id);
    }
    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

}
    

