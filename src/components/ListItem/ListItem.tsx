import React from "react";

import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

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
        <Checkbox color="primary" checked={finished} onChange={onToggle} />
        <Stack
          flexGrow={1}
          direction="row"
          alignSelf="center"
          justifyContent="space-between"
        >
          <Typography>{text}</Typography>
          <Typography color="grey.600">{date}</Typography>
        </Stack>
        <IconButton aria-label="delete" onClick={onRemove}>
          <DeleteIcon />
        </IconButton>
      </Box>
      <Divider />
    </>
  );
}

export { ListItem };
