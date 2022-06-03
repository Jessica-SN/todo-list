import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";

import { ITodo } from "../TodoList/TodoList.types";

interface IListItemProps extends Omit<ITodo, "id"> {
  key: number;
  onRemove(): void;
  onToggle(ev: React.ChangeEvent<HTMLInputElement>): void;
}

function ListItem({
  text,
  date,
  finished,
  onRemove,
  onToggle,
}: IListItemProps) {
  return (
    <>
      <Box display="flex">
        <Checkbox color="success" checked={finished} onChange={onToggle} />
        <div style={{ flexGrow: 1, alignSelf: "center", textAlign: "start" }}>
          {`${text} ${date}`}
        </div>
        <IconButton aria-label="delete" onClick={onRemove}>
          <DeleteIcon />
        </IconButton>
      </Box>
      <Divider />
    </>
  );
}

export { ListItem };
