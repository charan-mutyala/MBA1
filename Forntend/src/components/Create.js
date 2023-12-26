import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Typography, TextField, Button } from "@mui/material";
// import { Link } from "react-router-dom";

const Create = () => {
  const initialTutorial = {
    title: "",
    description: "",
    content: "",
  };

  const [newTutorial, setNewTutorial] = useState(initialTutorial);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTutorial((prevTutorial) => ({
      ...prevTutorial,
      [name]: value,
    }));
  };

  const handleCreateTutorial = () => {
    axios
      .post("http://localhost:8082/tutorials", newTutorial)
      .then((response) => {
        console.log("Tutorial created successfully:", response.data);
        setNewTutorial(initialTutorial);
        toast.success("Tutorial created successfully");
      })
      .catch((error) => {
        console.error("Error creating tutorial:", error);
        toast.error("Failed to create tutorial");
      });
  };

  return (
    <div>
      <Container maxWidth="md" style={{ marginTop: "40px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Create Tutorial
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
            value={newTutorial.title}
            onChange={handleInputChange}
            style={{ width: "120%", marginBottom: "25px", height: "50px" }}
          />
          <TextField
            label="Description"
            variant="outlined"
            margin="normal"
            name="description"
            value={newTutorial.description}
            onChange={handleInputChange}
            style={{ width: "120%", marginBottom: "25px", height: "50px" }}
          />
          <TextField
            label="Content"
            variant="outlined"
            margin="normal"
            name="content"
            value={newTutorial.content}
            onChange={handleInputChange}
            multiline
            rows={6}
            style={{ width: "120%", marginBottom: "45px", height: "150px" }}
          /><br /><br/>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              handleCreateTutorial();
            }}
            style={{ width: "100%" }}
          >
            Create Tutorial
          </Button>
 
          {/* Link to View All Tutorials page */}
          {/* <Link to="/view-all">View All Tutorials</Link> */}

          {/* Link to Add Students page */}
          {/* <Link to="/add-students">Add Students</Link>  */}
        </form>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default Create;
