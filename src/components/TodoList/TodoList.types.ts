export interface IDateTime {
  date: string;
  time: string;
}

export interface ITodo {
  id: number;
  text: string;
  finished: boolean;
  created: IDateTime;
}
