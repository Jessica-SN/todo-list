import Typography, { TypographyProps } from "@mui/material/Typography";
import Stack, { StackProps } from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

export const ItemStack = styled(Stack)<StackProps>(({ theme }) => ({
  flexGrow: 1,
  alignItems: "center",
  justifyContent: "space-between",
}));

export const DateContainer = styled(Stack)<StackProps>(({ theme }) => ({
  alignItems: "flex-end",
}));

export const DateText = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.grey[500],
}));
