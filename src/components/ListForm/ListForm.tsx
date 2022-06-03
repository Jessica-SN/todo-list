import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

interface IListFormProps {
  onAddNewItem(item: string): void;
}

function ListForm({ onAddNewItem }: IListFormProps) {
  const [newItem, setNewItem] = useState<string>("");

  const onChangeItem = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem(ev.target.value);
  };

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (newItem === "") return;
    onAddNewItem(newItem);
    setNewItem("");
  };

  return (
    <Box
      noValidate
      sx={{ display: "flex", alignItems: "center" }}
      component="form"
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <TextField
        fullWidth
        value={newItem}
        variant="standard"
        placeholder="Add a task"
        onChange={onChangeItem}
      />
      <IconButton aria-label="add" type="submit">
        <AddIcon />
      </IconButton>
    </Box>
  );
}

export { ListForm };
