package com.example.LearnCodeWave;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
@SpringBootApplication
@EntityScan("com.example.LearnCodeWave.model")
public class LearnCodeWaveApplication {

	public static void main(String[] args) {
		SpringApplication.run(LearnCodeWaveApplication.class, args);
	}

}
