import React, { useState } from "react";

import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { ListForm } from "../ListForm";
import { ITodo } from "./TodoList.types";
import { ListItem } from "../ListItem";
import { formatDate, hasDuplicates } from "./utils";

function TodoList() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addItem = (itemName: string) => {
    if (hasDuplicates(todos, itemName)) return;

    const newTodo: ITodo = {
      id: Math.random(),
      text: itemName,
      created: formatDate(Date.now()),
      finished: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeItem = (item: ITodo) => {
    const updateTodos = todos.filter((todo) => todo.id !== item.id);
    setTodos(updateTodos);
  };

  const toggleItem = (ev: React.ChangeEvent<HTMLInputElement>, item: ITodo) => {
    const checked: boolean = ev.target.checked;
    const { finished, ...rest } = item;
    const checkedItems: ITodo[] = todos.map((todo) => {
      if (todo.id === item.id) {
        return { ...rest, finished: checked };
      }
      return todo;
    });
    setTodos(checkedItems);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="div" mt={1}>
        TODO
      </Typography>
      <Divider />
      {todos.map((item) => (
        <ListItem
          key={item.id}
          created={item.created}
          text={item.text}
          finished={item.finished}
          onToggle={(ev) => toggleItem(ev, item)}
          onRemove={() => removeItem(item)}
        />
      ))}
      <ListForm onAddNewItem={addItem} />
    </Container>
  );
}

export { TodoList };
