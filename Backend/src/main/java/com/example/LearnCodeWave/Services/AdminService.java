package com.example.LearnCodeWave.Services;

import java.util.List;
import java.util.Optional;

import com.example.LearnCodeWave.controller.AdminLoginRequest;
import com.example.LearnCodeWave.controller.AdminRequest;
import com.example.LearnCodeWave.model.Admin;

public interface AdminService {
     
     Admin createAdmin(AdminLoginRequest loginRequest);
     Optional<Admin> login(String username, String password);
    Optional<Admin> getAdminById(Long id);
    List<Admin> getAllAdmins();

}
