import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Typography, TextField, Button } from "@mui/material";

const UpdateTutorial = () => {
  const { id } = useParams();
  const [tutorial, setTutorial] = useState({
    title: "",
    description: "",
    content: "",
  });

  useEffect(() => {
    // Fetch the details of the tutorial with the given id
    axios
      .get(`http://localhost:8082/tutorials/${id}`)
      .then((response) => {
        setTutorial(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tutorial details:", error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTutorial((prevTutorial) => ({
      ...prevTutorial,
      [name]: value,
    }));
  };

  const handleUpdateTutorial = () => {
    // Send a PUT request to update the tutorial
    axios
      .put(`http://localhost:8082/tutorials/${id}`, tutorial)
      .then((response) => {
        console.log("Tutorial updated successfully:", response.data);
        toast.success("Tutorial updated successfully");
      })
      .catch((error) => {
        console.error("Error updating tutorial:", error);
      });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "40px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Update Tutorial
      </Typography>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          label="Title"
          variant="outlined"
          margin="normal"
          name="title"
          value={tutorial.title}
          onChange={handleInputChange}
          style={{ width: "120%", marginBottom: "25px", height: "50px" }}
        />
        <TextField
          label="Description"
          variant="outlined"
          margin="normal"
          name="description"
          value={tutorial.description}
          onChange={handleInputChange}
          style={{ width: "120%", marginBottom: "25px", height: "50px" }}
        />
        <TextField
          label="Content"
          variant="outlined"
          margin="normal"
          name="content"
          value={tutorial.content}
          onChange={handleInputChange}
          multiline
          rows={2}
          style={{ width: "120%", marginBottom: "45px", height: "50px" }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdateTutorial}
          style={{ width: "120%" }}
        >
          Update Tutorial
        </Button>
      </form>
    </Container>
  );
};

export default UpdateTutorial;
