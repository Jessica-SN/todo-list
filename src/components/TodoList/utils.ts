import { ITodo } from "./TodoList.types";

export function formatDate(value: number): string {
  const date = new Date(value);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return [day, month, year].join(".");
}

export function hasDuplicates(items: ITodo[], value: string): boolean {
  const duplicate = items.filter(
    (item) => item.text.toLowerCase() === value.toLowerCase()
  );

  return duplicate.length > 0;
}
