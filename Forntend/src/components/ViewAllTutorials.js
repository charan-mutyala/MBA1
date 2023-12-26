// ViewAllTutorials.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Typography, Card, CardContent } from "@mui/material";

const ViewAllTutorials = () => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    // Fetch all tutorials when the component mounts
    axios
      .get("http://localhost:8082/tutorials")
      .then((response) => {
        setTutorials(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tutorials:", error);
      });
  }, []);

  const handleDeleteTutorial = (id) => {
    // Implement the logic to delete the tutorial with the given id
    axios
      .delete(`http://localhost:8082/tutorials/${id}`)
      .then((response) => {
        console.log("Tutorial deleted successfully:", response.data);
        // Update the local state to remove the deleted tutorial
        setTutorials((prevTutorials) =>
          prevTutorials.filter((tutorial) => tutorial.id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting tutorial:", error);
      });
  };

  

  return (
    <div style={{ maxWidth: "800px", margin: "auto", marginTop: "50px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        All Tutorials
      </Typography>
      {tutorials.map((tutorial) => (
        <Card key={tutorial.id} style={{ marginBottom: "20px" }}>
          <CardContent>
            <Typography variant="h6">{tutorial.title}</Typography>
            <Typography>{tutorial.description}</Typography>
            <Typography>{tutorial.content}</Typography>
            <div style={{ marginTop: "10px" }}>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={`/update-tutorial/${tutorial.id}`}
                style={{ marginRight: "10px" }}
              >
                Update
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleDeleteTutorial(tutorial.id)}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ViewAllTutorials;
