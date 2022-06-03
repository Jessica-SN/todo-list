import { IDateTime, ITodo } from "./TodoList.types";

export function formatDate(value: number): IDateTime {
  // Date
  const newDate = new Date(value);
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  const strDate = [day, month, year].join(".");
  // Time
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();
  const strTime = `${hours}:${minutes}`;

  return { date: strDate, time: strTime };
}

export function hasDuplicates(items: ITodo[], value: string): boolean {
  const duplicate = items.filter(
    (item) => item.text.toLowerCase() === value.toLowerCase()
  );

  return duplicate.length > 0;
}
