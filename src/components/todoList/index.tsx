import React from "react";
import Typography from "@mui/material/Typography";
import "./todolist.css";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
      <Typography variant="h2" gutterBottom component="div">
        TODO
      </Typography>
      <Divider />
      </Container>
    </div>
  );
}

export default App;
