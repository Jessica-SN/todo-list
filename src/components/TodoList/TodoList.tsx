import React, { useState } from "react";

import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { ListForm } from "../ListForm";
import { ITodo } from "./TodoList.types";

function TodoList() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addItem = (itemName: string) => {
    const newTodo: ITodo = {
      id: Math.random(),
      text: itemName,
      // TODO: Format date
      date: Date.now().toString(),
      finished: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="div" mt={1}>
        TODO
      </Typography>
      <Divider />
      {todos.map((item) => (
        <div>{item.text}</div>
      ))}
      <ListForm onAddNewItem={addItem} />
    </Container>
  );
}

export { TodoList };
