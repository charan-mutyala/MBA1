// AddStudents.js
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Typography, TextField, Button } from "@mui/material";

const AddStudent = () => {
  const initialStudent = {
    registrationNumber: "",
    password: "",
  };

  const [newStudent, setNewStudent] = useState(initialStudent);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleAddStudent = () => {
    axios
      .post("http://localhost:8082/admins/addStudent", newStudent)
      .then((response) => {
        console.log("Student added successfully:", response.data);
        setNewStudent(initialStudent);
        toast.success("Student added successfully");
      })
      .catch((error) => {
        console.error("Error adding student:", error);
        toast.error("Failed to add student");
      });
  };

  return (
    <div>
      <Container maxWidth="sm" style={{ marginTop: "40px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Add Students
        </Typography>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            label="Registration Number"
            variant="outlined"
            margin="normal"
            name="registrationNumber"
            value={newStudent.registrationNumber}
            onChange={handleInputChange}
            style={{ width: "120%", marginBottom: "25px", height: "50px" }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            name="password"
            value={newStudent.password}
            onChange={handleInputChange}
            style={{ width: "120%", marginBottom: "25px", height: "50px" }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              handleAddStudent();
            }}
            style={{ width: "120%" }}
          >
            Add Student
          </Button>
        </form>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default AddStudent;
