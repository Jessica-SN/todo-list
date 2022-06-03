import React from "react";

import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { ITodo } from "../TodoList/TodoList.types";

import * as S from "./ListItem.styles";

interface IListItemProps extends Omit<ITodo, "id"> {
  key: number;
  onRemove(): void;
  onToggle(ev: React.ChangeEvent<HTMLInputElement>): void;
}

function ListItem({
  text,
  created,
  finished,
  onRemove,
  onToggle,
}: IListItemProps) {
  return (
    <>
      <Box display="flex">
        <Checkbox color="primary" checked={finished} onChange={onToggle} />
        <S.ItemStack direction="row">
          <Typography>{text}</Typography>
          <S.DateContainer direction="column">
            <S.DateText variant="caption">{created.time}</S.DateText>
            <S.DateText variant="body2">{created.date}</S.DateText>
          </S.DateContainer>
        </S.ItemStack>
        <IconButton aria-label="delete" onClick={onRemove}>
          <DeleteIcon />
        </IconButton>
      </Box>
      <Divider />
    </>
  );
}

export { ListItem };
